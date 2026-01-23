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
            runInAction(() => {
                reactiveModel.setRestaurants(reactiveModel.allRestaurants);
                reactiveModel.setFilter(reactiveModel.availableFilters);
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true");
        } catch (error) {
            console.error("Error loading restaurants:", error);
            runInAction(() => {
                reactiveModel.setRestaurants(reactiveModel.allRestaurants);
                reactiveModel.setFilter(reactiveModel.availableFilters);
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
            reactiveModel.setRestaurants(reactiveModel.allRestaurants);
            reactiveModel.setFilter(data.appliedFilters ?? reactiveModel.availableFilters);
            reactiveModel.setReady(true);
            console.log("Model ready set to true (from firebase)");
        }});
    }

    function handleGetErrorACB(error) {
        console.log("Error getting snapshot:", error);
        loadInitialData();
    }

    function checkModelPropertiesACB() {
        return [reactiveModel.ready];
    }

    async function giveDataToFirebaseACB() {
        if (!reactiveModel.ready) {return;}
        
        try {
            const docReference = doc(db, COLLECTION, "SavedData");
            const data = {
                restaurants: reactiveModel.allRestaurants,
                filters: reactiveModel.availableFilters,
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
