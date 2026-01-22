import {model} from "./RestaurantModel";
import { connectToPersistence } from "./firebase/firestoreModel";
import { observable, configure, reaction } from "mobx";

export const reactiveModel= observable(model);

configure({ enforceActions: "always" });

function checkIdStateACB(){
    return reactiveModel.filtersApplied;
}

reactiveModel.doFilter({});

export { connectToPersistence, checkIdStateACB };
