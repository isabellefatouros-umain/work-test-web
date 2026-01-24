import { resolvePromise } from "./resolvePromise";
import { getRestaurantsApi, getFiltersApi, getIsOpenApi } from "./api/restaurantSource.js";
import { makeAutoObservable } from "mobx";

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
    },

    async loadRestaurants() {
        const restaurants = getRestaurantsApi();
        console.log("Restaurants from Api:", restaurants); //debug
        resolvePromise(restaurants, this.filterResultsPromiseState);
        try {
            const data = await restaurants;
            this.setAllRestaurants(data);
        } catch (error) {
            console.error("Error loading restaurants:", error);
        }
    },

    getAllRestaurants(){
        return this.allRestaurants;
    },

    setFilter(filterType, filters) {
        this[filterType] = filters;
        },


    async loadFoodFilters() {
        const foodFilters = getFiltersApi();
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

    assignPriceFilters(restaurantPrice) {
         if (restaurantPrice <= 100) {
            return "$";
        } else if (restaurantPrice <= 200) {
            return "$$";
        } else if (restaurantPrice <= 300) {
            return "$$$";
        } else {
            return "$$$$";
        }
    },

    assignImgAsset(restaurantImgLink) {
        const keywords = ["hamburgers", "pizza", "taco", "breakfast", "coffee", "fries", "mexican"];
        const match = keywords.find(keyword => restaurantImgLink.includes(keyword));
        return match? `${match}.png`: "default.png";
    },


    async loadIfOpenFilter(id) {
        const Is_open = getIsOpenApi(id);
        console.log("Fetched if open", Is_open); //debug
        return Is_open;
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

    filterRestaurants() {
        let filtered = this.filterResultsPromiseState.data || [];
        if (this.appliedFilters.length > 0) {
            filtered = filtered.filter(r => this.appliedFilters.some(f => r.filter_ids?.includes(f)));
        }
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
