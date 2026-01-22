import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { getDataFromApi } from "../api/restaurantSource.js";
import { resolvePromise } from "../resolvePromise.js";
import { SuspenseView } from "../views/suspenseView.jsx";
import { FilterResultsView } from "../views/filterResultsView.jsx";
import { TopbarFilterView } from "../views/topbarFilterView.jsx";
import { SidebarFilterView } from "../views/sidebarFilterView.jsx";


export const RestaurantFilter = observer(
    function RestaurantFilterRender(props) {
        function onTopFilterClickACB(filter) {
            props.model.toggleTopFilter(filter);
        }
        
        function onSideFilterClickACB(filter) {
            props.model.toggleSideFilter(filter);
        }

        useEffect(() => {
            resolvePromise(
                getDataFromApi("/restaurants"),
                props.model.filterResultsPromiseState
            );
            }, []);

        return (
            <div className="top-filter-container">
                <TopbarFilterView 
                    onFilterClick={onTopFilterClickACB}
                    activeFilters={props.model.topFilters}
                    availableFilters={props.model.availableTopFilters}
                />

                <div className="main-content">
                    <SidebarFilterView 
                        onFilterClick={onSideFilterClickACB}
                        activeFilters={props.model.sideFilters}
                        availableFilters={props.model.availableFilters}
                    />

                    <div className="results-container">
                        {props.model.filterResultsPromiseState.data? (
                            <FilterResultsView 
                                restaurants={props.model.getRestaurantsShown()}
                            />
                        ) : (
                            <SuspenseView 
                                promise={props.model.filterResultsPromiseState.promise}
                                error={props.model.filterResultsPromiseState.error}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
);
