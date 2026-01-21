import {model} from "./RestaurantModel";
import { connectToPersistence } from "./firebase/firestoreModel";
import { observable, configure, reaction } from "mobx";

export const reactiveModel= observable(model);

configure({ enforceActions: "always" });

function checkIdStateACB(){
    return reactiveModel.filtersApplied;
}

function resolvingDishPromiseACB(){
    return reactiveModel.currentDishEffect();
};

reactiveModel.doFilter({});

connectToPersistence(reactiveModel, reaction);

reaction(checkIdStateACB, resolvingDishPromiseACB);