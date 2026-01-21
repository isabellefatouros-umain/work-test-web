import "../styles/globals.css";

export function SidebarFilterView(props){

    return(
        <div className="sidebar-filter-parent">
            <h2 className="sidebar-filter-title">Filter</h2>

            <div className="sidebar-filter-content">
                <div className="filter-food-category">
                    <h3 className="filter-subcategory-title">Food Category</h3>
                    <SidebarFilterItem props={props} />

                </div>

                <div className="filter-delivery-time">
                    <h3 className="filter-subcategory-title">Delivery Time</h3>
                    <SidebarFilterItem props={props} />
                </div>

                <div className="filter-price-range">
                    <h3 className="filter-subcategory-title">Price Range</h3>
                    <SidebarFilterItem props={props} />
                </div>
                
            </div>
        </div>
    );
};

function SidebarFilterItem(props){
    return(
        <div id={props.id} className="sidebar-filter-item">
            <button  name={props.name} checked={props.checked} onChange={props.onChange}>
                <label className="sidebar-filter-item-label" htmlFor={props.id}>{props.name}</label>
            </button> 
        </div>
    );
}