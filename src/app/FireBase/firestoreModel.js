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
            console.log("Loaded restaurants:", restaurants);
            runInAction(() => {
                reactiveModel.setRestaurantsShown(restaurants || []);
                reactiveModel.setFiltersApplied([]);
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true");
        } catch (error) {
            console.error("Error loading restaurants:", error);
            runInAction(() => {
                reactiveModel.setRestaurantsShown([]);
                reactiveModel.setFiltersApplied([]);
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
            reactiveModel.setRestaurantsShown(data.restaurantsShown ?? []);
            reactiveModel.setFiltersApplied(data.filtersApplied ?? []);
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
        if (!reactiveModel.ready || !auth.currentUser) {
            return;
        }
        
        try {
            const docReference = doc(db, COLLECTION, auth.currentUser.uid);
            const data = {
                restaurantsShown: reactiveModel.restaurantsShown,
                filtersApplied: reactiveModel.filtersApplied
            };
            await setDoc(docReference, data);
            console.log("Data saved to Firebase");
        } catch (error) {
            console.log("Error saving to Firebase:", error);
        }
    }

    if (auth.currentUser) {
        const docReference = doc(db, COLLECTION, auth.currentUser.uid);
        getDoc(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);
    } else {
        console.log("No user logged in, loading from API only");
        await loadInitialData();
    }

    return watcherFunction(checkModelPropertiesACB, giveDataToFireBaseACB);
}
