import { resolvePromise } from "./resolvePromise";
import { getRestaurantsApi, getFoodFiltersApi, getPriceRangeApi, getIsOpenApi } from "./api/restaurantSource.js";
import { makeAutoObservable, runInAction } from "mobx";

export const model = {
    ready: false,
    allRestaurants: [],
    foodCategoryFilters: [],
    priceFilters: [],
    deliveryTimeFilters: [],
    appliedFilters: [],
    filterResultsPromiseState: { promise: null, data: null, error: null },

    setReady(value){
        this.ready = value;
    },

    setAllRestaurants(restaurants){
        this.allRestaurants = restaurants;
        this.filterResultsPromiseState.data = restaurants;
    },

    async loadRestaurants() {
        const restaurants = getRestaurantsApi();
        console.log("Restaurants from Api:", restaurants);
        resolvePromise(restaurants, this.filterResultsPromiseState);
        try {
            const data = await restaurants;
            runInAction(() => {
                this.allRestaurants = data;
                this.filterResultsPromiseState.data = data;
            });
        } catch (error) {
            console.error("Error loading restaurants:", error);
            runInAction(() => {
                this.filterResultsPromiseState.error = error;
            });
        }
    },

    getAllRestaurants(){
        return this.allRestaurants;
    },

    setFilter(filterType, filters) {
        this[filterType] = filters;
        },


    async loadFoodFilters() {
        const foodFilters = getFoodFiltersApi();
        console.log("Fetched food filters:", foodFilters); //debug
        return foodFilters;
    },

    assignTimeFilter(restaurantTime) {
        if (restaurantTime <= 10) {
            return "0-10 min";
        } else if (restaurantTime <= 30) {
            return "10-30 min";
        } else if (restaurantTime <= 60) {
            return "30-60 min";
        } else {
            return "1+ hour";
        }
    },

    generateDeliveryTimeFilters() {
        const allTimeRanges = [
            { id: "0-10 min", name: "0-10 min" },
            { id: "10-30 min", name: "10-30 min" },
            { id: "30-60 min", name: "30-60 min" },
            { id: "1+ hour", name: "1+ hour" }
        ];
        
        return allTimeRanges;
    },

    async loadPriceFilters(restaurantPrice) {
        const priceRangeIds = new Set();
        this.allRestaurants.forEach(restaurant => {
            if (restaurant.price_range_id) {
                priceRangeIds.add(restaurant.price_range_id);
            }
        });

        const pricePromises = Array.from(priceRangeIds).map(async (priceId) => {
            try {
                const priceData = await getPriceRangeApi(priceId);
                console.log("price range from Api:", priceData);
                return {
                    id: priceId,
                    range: priceData.range
                };
            } catch (error) {
                console.error(`Error loading price range ${priceId}:`, error);
                return null;
            }
        });
        const priceFilters = await Promise.all(pricePromises);
        return priceFilters.filter(filter => filter !== null);
    },

    async loadIfOpenFilter(id) {
        const Is_open = getIsOpenApi(id);
        console.log("Fetched if open", Is_open); //debug
        return Is_open;
    },

    setIfOpen(restaurantId, isOpen) {
        const restaurant = this.allRestaurants.find(r => r.id === restaurantId);
        if (restaurant) {
            restaurant.is_currently_open = isOpen;
        }
    },

    getFoodFilterIds(restaurants) {
        const allFilterIds = new Set();
        restaurants.forEach(restaurant => {
            if (restaurant.filter_ids) {
                restaurant.filter_ids.forEach(filterId => {
                    allFilterIds.add(filterId);
                });
            }
        });
        const filterArray = Array.from(allFilterIds);
        return filterArray;
    },

    toggleFilter(filter) {
        console.log("Applied filters:", this.appliedFilters);
        if (this.appliedFilters.includes(filter)) {
            this.appliedFilters = this.appliedFilters.filter(f => f !== filter);
        } else {
            this.appliedFilters = [...this.appliedFilters, filter];
        }
    },

    get filterRestaurants() {
        let filtered = this.allRestaurants;

        if (this.appliedFilters.length === 0) {
            return filtered;
        }
        filtered = filtered.filter(restaurant => {
            return this.appliedFilters.some(filter => {
                if (restaurant.filter_ids?.includes(filter)) return true;
                if (restaurant.price_range_id === filter) return true;
                if (this.assignTimeFilter(restaurant.delivery_time_minutes) === filter) return true;
                return false;
            });
        });
        return filtered;
    },
};

makeAutoObservable(model)


/*
one restaurant object structure:
{
  "id": "string",
  "name": "string",
  "rating": "number",
  "filter_ids": [
    "string"
  ],
  "image_url": "string",
  "delivery_time_minutes": "number",
  "price_range_id": "string"
}
*/
