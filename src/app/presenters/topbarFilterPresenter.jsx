import { observer } from "mobx-react-lite";
import { SuspenseView } from "../views/suspenseView.jsx";
import { TopbarFilterView } from "../views/topbarFilterView.jsx";

export const TopbarFilter = observer(
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
            <TopbarFilterView
                            onTopFilterChanged = {onTopFilterChangedACB}
                            onSideFilterChanged = {onSideFilterChangedACB}
                            onSearchClick = {onSearchClickACB}/>
            {(props.model.filterResultsPromiseState && props.model.filterResultsPromiseState.data && <SearchResultsView searchResults = {props.model.filterResultsPromiseState.data}
                                                                                                                        currentDishEffect ={onSearchResultChosenACB}/>) || 
            <SuspenseView promise = {props.model.filterResultsPromiseState.promise}
                        error = {props.model.filterResultsPromiseState.error}/>}
        </div>
        );
    }
);
