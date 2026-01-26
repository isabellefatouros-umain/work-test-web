import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig.js";
import { runInAction } from "mobx";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const COLLECTION = "restaurants";

export async function connectToPersistence(reactiveModel, watcherFunction) {
    console.log("connectToPersistence called"); //debug

    async function loadInitialData() {
        console.log("Loading initial data..."); //debug

        try {
            await reactiveModel.loadRestaurants();
            const foodFilters = await reactiveModel.loadFoodFilters();
            const priceFilters = await reactiveModel.loadPriceFilters();
            const deliveryTimeFilters = reactiveModel.generateDeliveryTimeFilters();

            console.log("Food filters loaded:", foodFilters.length); //debug
            console.log("Price filters loaded:", priceFilters.length);
            console.log("Delivery time filters generated:", deliveryTimeFilters);

            runInAction(() => {
                reactiveModel.setFilter("foodCategoryFilters", foodFilters);
                reactiveModel.setFilter("priceFilters", priceFilters);
                reactiveModel.setFilter("deliveryTimeFilters", reactiveModel.generateDeliveryTimeFilters());
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true"); //debug
        } catch (error) {
            console.error("Error loading restaurants:", error);
        }
    }

    async function handleSnapShotACB(snapshot) {
        const data = snapshot.data();

        runInAction(() => {
        if (!data) {
            loadInitialData();
        } else {
            reactiveModel.setAllRestaurants(data.restaurants);
            reactiveModel.setFilter("deliveryTimeFilters", data.filters.deliveryTimeFilters);
            reactiveModel.setFilter("priceFilters", data.filters.priceFilters);
            reactiveModel.setFilter("foodCategoryFilters", data.filters.foodCategoryFilters);
            reactiveModel.setReady(true);
            console.log("Model ready set to true (from firebase)"); //debug
        }});
    }

    function handleGetErrorACB(error) {
        console.log("Error getting snapshot:", error);
        loadInitialData();
    }

    function checkModelPropertiesACB() {
        return [reactiveModel.allRestaurants.length, reactiveModel.foodCategoryFilters.length, reactiveModel.priceFilters.length,reactiveModel.deliveryTimeFilters.length];
    }

    async function giveDataToFirebaseACB() {
        if (!reactiveModel.ready) {return;}
        
        try {
            const docReference = doc(db, COLLECTION, "SavedData");
            const data = {
                restaurants: reactiveModel.allRestaurants,
                filters: {
                    foodCategoryFilters: reactiveModel.foodCategoryFilters,
                    priceFilters: reactiveModel.priceFilters,
                    deliveryTimeFilters: reactiveModel.deliveryTimeFilters
                }
            };
            await setDoc(docReference, data);
            console.log("Data saved to firebase"); //debug
        } catch (error) {
            console.log("Error saving to firebase:", error);
        }
    }
        const docReference = doc(db, COLLECTION, "SavedData");
        getDoc(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);
        return watcherFunction(checkModelPropertiesACB, giveDataToFirebaseACB);
}
