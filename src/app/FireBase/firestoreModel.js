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

        await reactiveModel.loadRestaurants();
        const foodFilters = await reactiveModel.loadFoodFilters();
        reactiveModel.setFilter("priceFilters", reactiveModel.generatePriceFilters());
            reactiveModel.setFilter("deliveryTimeFilters", reactiveModel.generateDeliveryTimeFilters());

        try {
            runInAction(() => {
                reactiveModel.setFilter("foodCategoryFilters", foodFilters);
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true");
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
            console.log("Model ready set to true (from firebase)");
        }});
    }

    function handleGetErrorACB(error) {
        console.log("Error getting snapshot:", error);
        loadInitialData();
    }

    function checkModelPropertiesACB() {
    return [reactiveModel.appliedFilters.length, reactiveModel.allRestaurants.length];
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
            console.log("Data saved to firebase");
        } catch (error) {
            console.log("Error saving to firebase:", error);
        }
    }
        const docReference = doc(db, COLLECTION, "SavedData");
        getDoc(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);
        return watcherFunction(checkModelPropertiesACB, giveDataToFirebaseACB);
}
