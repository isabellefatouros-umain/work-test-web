import {model} from "./RestaurantModel";
import { connectToPersistence } from "./firebase/firestoreModel";
import { observable, configure, reaction } from "mobx";

export const reactiveModel= observable(model);

window.myModel= reactiveModel;
configure({ enforceActions: "always" });

function checkIdStateACB(){
    return reactiveModel.filtersApplied;
}

function resolvingDishPromiseACB(){
    return reactiveModel.currentDishEffect();
};

myModel.doFilter({});

connectToPersistence(reactiveModel, reaction);

reaction(checkIdStateACB, resolvingDishPromiseACB);