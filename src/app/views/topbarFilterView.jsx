import { FilterCard } from "../components/filterCard";
import "../styles/globals.css";

export function TopbarFilterView(props){
    if (!props.foodCategoryFilters || !props.activeFilters) {
        return null;
    }

    return(
        <div className="topbar-filter-parent">
            <div className="topbar-filter-cards">
                {(props.foodCategoryFilters || []).map(filter => (
                    <FilterCard key={filter.id} filter={filter} props={props} />
                ))}
            </div>
        </div>
    );
};
