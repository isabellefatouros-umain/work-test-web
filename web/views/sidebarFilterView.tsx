import "/web/styles/style.css"

export function SidebarFilterView(props: any){

    return(
        <div className="sidebar-filter-view">
            <h2>Sidebar Filter Stub View</h2>
            <p>Restaurant ID: {props.restaurantId}</p>
        </div>
    );
};