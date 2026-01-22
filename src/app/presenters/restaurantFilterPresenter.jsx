import { observer } from "mobx-react-lite";
import { SuspenseView } from "../views/suspenseView.jsx";
import { FilterResultsView } from "../views/filterResultsView.jsx";
import { TopbarFilterView } from "../views/topbarFilterView.jsx";
import { SidebarFilterView } from "../views/sidebarFilterView.jsx";


export const RestaurantFilter = observer(
    function RestaurantFilterRender(props) {
        function onFilterClickACB(filter) {
            props.model.toggleFilter(filter);
        }

        return (
            <div className="page-layout">
                <SidebarFilterView 
                        onFilterClick={onFilterClickACB}
                        activeFilters={props.model.appliedFilters}
                        availableFilters={props.model.availableFilters}
                    />

                <div className="topbar-results-layout">
                    <TopbarFilterView 
                        onFilterClick={onFilterClickACB}
                        activeFilters={props.model.appliedFilters}
                        availableFilters={props.model.availableFilters}
                    />
                    <div className="results-layout">
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
