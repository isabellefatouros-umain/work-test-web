import { resolvePromise } from "./resolvePromise";
import { getDataFromApi } from "./api/restaurantSource.js";
import { makeAutoObservable } from "mobx";

export const model = {
    ready: false,
    allRestaurants: [],
    availableFilters: {
        foodCategories: [],
        deliveryTimes: [],
        priceRanges: []
    },
    appliedFilters: [],
    filterResultsPromiseState: { promise: null, data: null, error: null },

    setReady(value){
        this.ready = value
    },

    setRestaurants(restaurants){
        this.allRestaurants = restaurants;
        this.filterResultsPromiseState.data = restaurants;
    },

    setFilter(filterData){
        console.log("Fetched filters:", filterData);
        this.availableFilters = filterData;
    },

    getRestaurants(){
        return this.allRestaurants
    },

    getAllFiltersAsArray() {
        const { foodCategories = [], deliveryTimes = [], priceRanges = [] } = this.availableFilters;
        return [...foodCategories, ...deliveryTimes, ...priceRanges];
    },

    async loadRestaurants() {
        const promise = getDataFromApi("/restaurants");
        resolvePromise(promise, this.filterResultsPromiseState);
        
        try {
            const data = await promise;
            this.setRestaurants(data);

            await this.loadFilters();
            
            console.log("Restaurants loaded", data.length);
            console.log("Restaurant filters", data[0].filter_ids);
            console.log("Available filters", this.availableFilters);


        } catch (error) {
            console.error("Error loading restaurants:", error);
        }
    },

    async loadFilters() {
        const filters = await getDataFromApi("/filters");

        const categorized = {
            foodCategories: [],
            deliveryTimes: [],
            priceRanges: []
        };

        filters.forEach(f => {
            if (f.category === "food") categorized.foodCategories.push(f);
            if (f.category === "delivery_time") categorized.deliveryTimes.push(f);
            if (f.category === "price") categorized.priceRanges.push(f);
        });

        this.availableFilters = categorized;
    },


    toggleFilter(filter) {
        console.log("Applied filters:", this.appliedFilters);

        if (this.appliedFilters.includes(filter)) {
            this.appliedFilters = this.appliedFilters.filter(f => f !== filter);
        } else {
            this.appliedFilters = [...this.appliedFilters, filter];
        }
    },

    getRestaurantsShown() {
        let filtered = this.filterResultsPromiseState.data || [];
        if (this.appliedFilters.length > 0) {
            filtered = filtered.filter(r =>
                this.appliedFilters.some(f =>
                    r.filter_ids?.includes(f)
                )
            );
        }
        return filtered;
    },

    extractFiltersFromRestaurants(restaurants) {
        const allFilterIds = new Set();
        
        restaurants.forEach(restaurant => {
            if (restaurant.filter_ids) {
                restaurant.filter_ids.forEach(filterId => {
                    allFilterIds.add(filterId);
                });
            }
        });
    
        const filterArray = Array.from(allFilterIds);
        const categorizedFilters = {
            foodCategories: filterArray.filter(f => 
                !f.includes('min') && !f.includes('$')
            ),
            deliveryTimes: filterArray.filter(f => 
                f.includes('min')
            ),
            priceRanges: filterArray.filter(f => 
                f.includes('$')
            )
        };
        
        console.log("Extracted filters:", categorizedFilters);
        return categorizedFilters;
    }
};

makeAutoObservable(model);

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
