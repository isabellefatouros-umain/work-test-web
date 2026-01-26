import {model} from "./RestaurantModel";
import { observable, configure } from "mobx";

export const reactiveModel= observable(model);
configure({ enforceActions: "always" });

export function checkIdStateACB(){
    return reactiveModel.filtersApplied;
}
