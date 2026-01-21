import { resolvePromise } from "./resolvePromise";
import { getDataFromApi } from "./api/restaurantSource";

export const model = {
    ready: false,
    restaurantsShown: [],
    filtersApplied: [],
    filterResultsPromiseState: {},


    setUser(user){
        this.user = user
    },

    setReady(value){
        this.ready = value
    },

    getRestaurantsShown(){
        return this.restaurantsShown
    },

    getFilters(){
        return this.filters
    },

    getFiltersApplied(){
        return this.filtersApplied
    },

    doFilter(filterIds){
        this.filtersApplied = filterIds;
    },
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