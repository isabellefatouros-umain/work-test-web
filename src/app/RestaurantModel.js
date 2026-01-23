import { resolvePromise } from "./resolvePromise";
import { getRestaurantsApi, getFiltersApi } from "./api/restaurantSource.js";
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
        this.availableFilters = filterData;
    },

    getRestaurants(){
        return this.allRestaurants
    },

    async loadRestaurants() {
        const promise = getRestaurantsApi();
        console.log("Loaded restaurants", promise); //debug
        resolvePromise(promise, this.filterResultsPromiseState);
        try {
            const data = await promise;
            this.setRestaurants(data);
            await this.loadFilters();
        } catch (error) {
            console.error("Error loading restaurants:", error);
        }
    },

    async loadFilters() {
        const filters = await getFiltersApi();
        console.log("Fetched filters:", filters); //debug
        const categorized = {
            foodCategories: [],
            deliveryTimes: [],
            priceRanges: []
        };

        filters.forEach(f => {
            if (!f.includes('min') && !f.includes('$')) categorized.foodCategories.push(f);
            if (f.includes('min')) categorized.deliveryTimes.push(f);
            if (f.includes('$')) categorized.priceRanges.push(f);
        });
        this.availableFilters = categorized;
    },

    getFilterIdsFromRestaurants(restaurants) {
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
        return categorizedFilters;
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
