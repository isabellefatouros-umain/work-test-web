import { resolvePromise } from "./resolvePromise";

export const model = {
    ready: false,
    allRestaurants: [],
    availableFilters: {},
    appliedFilters: [],
    filterResultsPromiseState: { promise: null, data: null, error: null },

    setReady(value){
        this.ready = value
    },

    setRestaurants(restaurants){
        this.allRestaurants = restaurants;
    },

    setFilter(filter){
        this.availableFilters = filter;
    },

    getRestaurants(){
        return this.allRestaurants
    },

    toggleFilter(filter) {
        if (this.appliedFilters.includes(filter)) {
            this.appliedFilters = this.appliedFilters.filter(f => f !== filter);
        } else {
            this.appliedFilters.push(filter);
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
    }
};

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