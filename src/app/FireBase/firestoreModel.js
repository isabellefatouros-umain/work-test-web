import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig.js";
import { getAuth } from "firebase/auth";
import { getDataFromApi } from "../api/restaurantSource.js";
import { runInAction } from "mobx";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const COLLECTION = "restaurants";

export async function connectToPersistence(reactiveModel, watcherFunction) {
    
    async function loadInitialData() {
        console.log("Loading initial data...");

        try {
            const restaurants = await getDataFromApi("/restaurants");
            const filters = await getDataFromApi("/filter");
            console.log("Fetched filters:", filters);
            console.log("Loaded restaurants:", restaurants);
            runInAction(() => {
                reactiveModel.setRestaurants(restaurants || []);
                reactiveModel.setFilter(filters || []);
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true");
        } catch (error) {
            console.error("Error loading restaurants:", error);
            runInAction(() => {
                reactiveModel.setRestaurants([]);
                reactiveModel.setFilter([]);
                reactiveModel.setReady(true);
            });
        }
    }

    async function handleSnapShotACB(snapshot) {
        const data = snapshot.data();

        runInAction(() => {
        if (!data) {
            loadInitialData();
        } else {
            reactiveModel.setRestaurants(data.restaurants ?? []);
            reactiveModel.setFilter(data.filters ?? []);
            reactiveModel.setReady(true);
            console.log("Model ready set to true (from Firebase)");
        }});
    }

    function handleGetErrorACB(error) {
        console.log("Error getting snapshot:", error);
        loadInitialData();
    }

    function checkModelPropertiesACB() {
        return [reactiveModel.ready, reactiveModel.restaurantsShown, reactiveModel.filtersApplied];
    }

    async function giveDataToFireBaseACB() {
        if (!reactiveModel.ready) {
            return;
        }
        
        try {
            const docReference = doc(db, COLLECTION, "SavedData");
            const data = {
                restaurants: reactiveModel.restaurants,
                filters: reactiveModel.filters,
            };
            await setDoc(docReference, data);
            console.log("Data saved to Firebase");
        } catch (error) {
            console.log("Error saving to Firebase:", error);
        }
    }
        const docReference = doc(db, COLLECTION, "SavedData");
        getDoc(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);

        return watcherFunction(checkModelPropertiesACB, giveDataToFireBaseACB);
}
