import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, deleteField } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const COLLECTION = "restaurants";

export function connectToPersistence(reactiveModel, watchFunction) {
    let stopWatching = null;

    onAuthStateChanged(auth,
        function logInOrOutACB(user) {
            reactiveModel.setUser(user);
            // LOGOUT
            if (!user) {
                if (stopWatching) {
                    stopWatching();
                    stopWatching = null;
                }
                reactiveModel.sounds = []; // sätt in restauranger
                reactiveModel.setReady(true);
                return;
            };

            // LOGIN
            reactiveModel.setReady(false);
            console.log("reading persistence for", user.uid);
            const docReference = doc(db, COLLECTION, user.uid);
            getDoc(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);
        });

    function handleSnapShotACB(snapshot) {
        const data = snapshot.data();
        if (!data) {
            reactiveModel.restaurants = []; // sätt in fler värden 
        } else {
            reactiveModel.restaurants = data.restaurants ?? [];
        };
        reactiveModel.setReady(true);
        console.log("Model ready set to true (after snapshot)"); //debug

        if (stopWatching) {
            stopWatching();
        }
        stopWatching = watchFunction(checkModelPropertiesACB, giveDataToFireBaseACB);
    };

    function handleGetErrorACB() {
        console.log("Error getting snapshot:", error);
        reactiveModel.sounds = [];
        reactiveModel.setCurrentSoundId(null);
        reactiveModel.soundboardConfig = [[]];
        reactiveModel.setEditMode(false);
        reactiveModel.setReady(true);
        console.log("Model ready set to true (after error)");
    };

    function checkModelPropertiesACB() {
        return [reactiveModel.currentSoundId, reactiveModel.sounds, reactiveModel.soundboardConfig, reactiveModel.columnNames, reactiveModel.hasSeenWelcomePopup, reactiveModel.soundSettings]
    };

    async function giveDataToFireBaseACB() {
        if (!reactiveModel.ready || !reactiveModel.user) {
            return;
        };
        const docReference = doc(db, COLLECTION, reactiveModel.user.uid);

        // Serialize soundboardConfig from nested array to flat object for Firestore
        const soundboardConfigFlat = {};
        reactiveModel.soundboardConfig.forEach((col, idx) => {
            soundboardConfigFlat[idx] = col;
        });

        try {
            const snapshot = await getDoc(docReference);
            const existingData = snapshot.data();
            
            if (existingData?.soundboardConfigFlat) {
                const existingIndices = Object.keys(existingData.soundboardConfigFlat);
                const currentIndices = new Set(Object.keys(soundboardConfigFlat));
                existingIndices.forEach(idx => {
                    if (!currentIndices.has(idx)) {
                        soundboardConfigFlat[idx] = deleteField();
                    }
                });
            }
        } catch (error) {console.log("Error reading existing data:", error);}

        const data = {
            currentSoundId: reactiveModel.currentSoundId,
            sounds: reactiveModel.sounds,
            soundboardConfigFlat: soundboardConfigFlat,
            columnNames: reactiveModel.columnNames,
            hasSeenWelcomePopup: reactiveModel.hasSeenWelcomePopup,
            soundSettings: reactiveModel.soundSettings
        };
        console.log("Saving to Firestore:", data); // debug
        return setDoc(docReference, data, { merge: true });
    };
};
