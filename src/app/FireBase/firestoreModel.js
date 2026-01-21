import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, deleteField } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig.js";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const COLLECTION = "restaurants";

export async function connectToPersistence(reactiveModel, watcherFunction) {
    function handleSnapShotACB(snapshot) {
        const data = snapshot.data();
        if (!data) {
            reactiveModel.restaurantsShown = getDataFromApi("/restaurants"); // sätt in fler värden
            reactiveModel.filtersApplied = [];



        } else {
            reactiveModel.restaurantsShown = data.restaurantsShown ?? getDataFromApi("/restaurants");
            reactiveModel.filtersApplied = data.filtersApplied ?? [];



        };
        reactiveModel.setReady(true);
        console.log("Model ready set to true (after snapshot)"); //debug
    };

    function handleGetErrorACB() {
        console.log("Error getting snapshot:", error);
        reactiveModel.restaurantsShown = getDataFromApi("/restaurants"); // sätt in fler värden
        reactiveModel.filtersApplied = [];



        reactiveModel.setReady(true);
        console.log("Model ready set to true (after error)");
    };

    function checkModelPropertiesACB() {
        return [reactiveModel.ready, reactiveModel.restaurantsShown, reactiveModel.filtersApplied];
    };

    async function giveDataToFireBaseACB() {
        if (!reactiveModel.ready) {
            return;
        };
        try {
            const snapshot = await getDoc(docReference);
            const existingData = snapshot.data();
        } catch (error) {console.log("Error reading existing data:", error);}

        const data = {
            restaurantsShown: reactiveModel.restaurantsShown,
            filtersApplied: reactiveModel.filtersApplied


        };
        reactiveModel.ready = false;
        const docReference = doc(db, COLLECTION, auth.currentUser.uid);
        getDoc(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);
        return watcherFunction(checkModelPropertiesACB, giveDataToFireBaseACB);
    };
};
