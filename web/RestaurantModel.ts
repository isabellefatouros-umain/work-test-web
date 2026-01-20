import { resolvePromise } from "./resolvePromise";
import { getDataFromApi } from "./api/RestaurantSource";

export const model = {
    user: undefined,
    ready: false,
    restaurants: [],

    setUser(user: undefined){
        this.user = user
    },

    setReady(value: boolean){
        this.ready = value
    },

    getRestaurants(){
        return this.restaurants
    }
};