import "../styles/globals.css";

export function TopbarFilterView(props){
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

/*
function TopbarFilterCard({props}) {
  return (
    <div id={props.id} className="topbar-filter-card">
        <div className="topbar-filter-label">{props.name}</div>
        <div className="topbar-filter-img-container">
            <img className="topbar-filter-img" src={props.image} style={{background: `url(${props.image}) lightgray 50% / cover no-repeat`, draggable: false}}/>
        </div>
    </div>
  );
}
*/