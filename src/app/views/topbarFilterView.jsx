import "../styles/globals.css";

export function TopbarFilterView(props){
    console.log("Topbar filters:", props.availableFilters, props.activeFilters);

    if (!props.availableFilters || !props.activeFilters) {
        return null;
    }

    return(
        <div className="topbar-filter-parent">
            <div className="topbar-filter-cards">
                {props.availableFilters.map(filter => (
                    <button
                        key={filter}
                        className={props.activeFilters.includes(filter) ? "active" : ""}
                        onClick={() => props.onFilterClick(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};
