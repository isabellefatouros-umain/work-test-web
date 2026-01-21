import { observer } from "mobx-react-lite";
import { SuspenseView } from "../views/suspenseView.jsx";
import { SidebarFilterView } from "../views/sidebarFilterView.jsx";
import { TopbarFilterView } from "../views/topbarFilterView.jsx";
import { FilterResultsView } from "../views/filterResultsView.jsx";

export const Filter = observer(
    function FilterRender(props){
        function onTopFilterChangedACB(query){
            props.model.setSearchQuery(query);
            console.log(query);
        };
        function onSideFilterChangedACB(type){
            props.model.setSearchType(type);
            console.log(type);
        };
        function onSearchClickACB(){
            const searchParams = props.model.searchParams
            props.model.doSearch(searchParams);
            console.log("on search clicked", searchParams)
        };

        function onSearchResultChosenACB(dish) {
            props.model.setCurrentDishId(dish.id);
            window.location.hash ="#/details"
            console.log("dish clicked", dish.id);
        };

        return (
        <div className="debug">
            <FilterResultsView dishTypeOptions = {["starter", "main course", "dessert"]}
                            text = {props.model.searchParams.query}
                            type = {props.model.searchParams.type} 
                            onQueryChange = {onQueryChangeACB}
                            onChangedType = {onChangedTypeACB}
                            onSearchClick = {onSearchClickACB}/>
            {(props.model.searchResultsPromiseState && props.model.searchResultsPromiseState.data && <SearchResultsView searchResults = {props.model.searchResultsPromiseState.data}
                                                                                                                        currentDishEffect ={onSearchResultChosenACB}/>) || 
            <SuspenseView promise = {props.model.searchResultsPromiseState.promise}
                        error = {props.model.searchResultsPromiseState.error}/>}
        </div>
        );
    }
);
