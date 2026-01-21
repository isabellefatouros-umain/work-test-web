import { resolvePromise } from "./resolvePromise";
import { getDataFromApi } from "./api/restaurantSource";

export const model = {
    user: undefined,
    ready: false,
    restaurants: [],
    filters: [],
    filtersApplied: [],


    setUser(user){
        this.user = user
    },

    setReady(value){
        this.ready = value
    },

    getRestaurants(){
        return this.restaurants
    },

    getFilters(){
        return this.filters
    },

    getFiltersApplied(){
        return this.filtersApplied
    },

    doFilter(filterIds){
        this.filtersApplied = filterIds;
        this.resolveRestaurantsPromise();
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