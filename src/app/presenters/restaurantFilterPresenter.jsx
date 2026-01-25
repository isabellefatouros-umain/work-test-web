import { observer } from "mobx-react-lite";
import { SuspenseView } from "../views/suspenseView.jsx";
import { FilterResultsView } from "../views/filterResultsView.jsx";
import { TopbarFilterView } from "../views/topbarFilterView.jsx";
import { SidebarFilterView } from "../views/sidebarFilterView.jsx";

export const RestaurantFilter = observer(
    function RestaurantFilterRender(props) {
        function onFilterClickACB(filter) {
            props.model.toggleFilter(filter);
            };

        console.log("All restaurants:", props.model.allRestaurants);
        console.log("All price filters:", props.model.priceFilters);

        return (
            <div className="page-layout">
                <SidebarFilterView 
                        onFilterClick={onFilterClickACB}
                        activeFilters={props.model.appliedFilters}
                        foodCategoryFilters={props.model.foodCategoryFilters}
                        deliveryTimeFilters={props.model.deliveryTimeFilters}
                        priceFilters={props.model.priceFilters}
                    />

                <div className="topbar-results-layout">
                    <TopbarFilterView 
                        onFilterClick={onFilterClickACB}
                        activeFilters={props.model.appliedFilters}
                        foodCategoryFilters={props.model.foodCategoryFilters}
                    />
                    <div className="results-layout">
                        {props.model.filterResultsPromiseState.data? (
                            <FilterResultsView 
                                allRestaurants={props.model.filterRestaurants}
                            />
                        ):(
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
