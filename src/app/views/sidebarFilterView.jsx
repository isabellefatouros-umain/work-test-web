import "../styles/globals.css";

export function SidebarFilterView(props){
    if (!props.availableFilters || !props.activeFilters) {
        return null;
    }

    return(
        <div className="sidebar-filter-parent">
            <h2 className="sidebar-filter-title">Filter</h2>

            <div className="sidebar-filter-content">
                <div className="filter-food-category">
                    <h3 className="filter-subcategory-title" >Food Category</h3>
                    {(props.availableFilters.foodCategories || []).map(filter => (
                    <button
                        key={filter}
                        className={props.activeFilters.includes(filter) ? "active" : ""}
                        onClick={() => props.onFilterClick(filter)}
                    >
                        {filter}
                    </button>))}
                </div>

                <div className="filter-delivery-time">
                    <h3 className="filter-subcategory-title">Delivery Time</h3>
                    {(props.availableFilters.deliveryTimes || []).map(filter => (
                    <button
                        key={filter}
                        className={props.activeFilters.includes(filter) ? "active" : ""}
                        onClick={() => props.onFilterClick(filter)}
                    >
                        {filter}
                    </button>))}
                </div>

                <div className="filter-price-range">
                    <h3 className="filter-subcategory-title">Price Range</h3>
                    {(props.availableFilters.priceRanges || []).map(filter => (
                    <button 
                        key={filter}
                        className={props.activeFilters.includes(filter) ? "active" : ""}
                        onClick={() => props.onFilterClick(filter)}
                    >
                        {filter}
                    </button>))}
                </div>
                
            </div>
        </div>
    );
};

/*
function SidebarFilterItem(props){
    return(
        <div id={props.id} className="sidebar-filter-item">
            <button  name={props.name} checked={props.checked} onChange={props.onChange}>
                <label className="sidebar-filter-item-label" htmlFor={props.id}>{props.name}</label>
            </button> 
        </div>
    );
}
*/