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
                        key={filter.id}
                        className={"topbar-filter-card " + (props.activeFilters.includes(filter.id) ? "active" : "")}
                        onClick={() => props.onFilterClick(filter.id)}
                    >
                        <span>{filter.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

