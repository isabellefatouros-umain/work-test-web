import "../styles/globals.css";

export function SidebarFilterView(props){
    if (!props.foodCategoryFilters || !props.deliveryTimeFilters || !props.priceFilters || !props.activeFilters) {
        return null;
    }

    console.log("deliveryTimeFilters:", props.deliveryTimeFilters);
    console.log("priceFilters:", props.priceFilters);


    return(
        <div className="sidebar-filter-parent">
            <h2 className="sidebar-filter-title">Filter</h2>

            <div className="sidebar-filter-content">
                <div className="filter-food-category sidebar-filter-item">
                    <h3 className="filter-subcategory-title">Food Category</h3>
                    {(props.foodCategoryFilters || []).map(filter => (
                    <button key={filter.id}
                        className={"filter-pill " + (props.activeFilters.includes(filter.id) ? "active" : "")}
                        onClick={() => props.onFilterClick(filter.id)}
                    >
                        {filter.name}
                    </button>))}
                </div>

                <div className="filter-delivery-time sidebar-filter-item">
                    <h3 className="filter-subcategory-title">Delivery Time</h3>
                    {(props.deliveryTimeFilters || []).map(filter => (
                    <button key={filter.id}
                        className={"filter-pill " + (props.activeFilters.includes(filter.id) ? "active" : "")}
                        onClick={() => props.onFilterClick(filter.id)}
                    >
                        {filter.name}
                    </button>))}
                </div>

                <div className="filter-price-range sidebar-filter-item">
                    <h3 className="filter-subcategory-title">Price Range</h3>
                    {(props.priceFilters || []).map(filter => (
                    <button key={filter.id}
                        className={"filter-pill " + (props.activeFilters.includes(filter.id) ? "active" : "")}
                        onClick={() => props.onFilterClick(filter.id)}
                    >
                        {filter.range}
                    </button>))}
                </div>
            </div>
        </div>
    );
};
