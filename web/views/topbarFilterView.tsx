import "/web/styles/style.css"

export function TopbarFilterView(props: any){

    return(
        <div className="topbar-filter-view">
            <h2>Topbar Filter Stub View</h2>
            <p>Restaurant ID: {props.restaurantId}</p>
        </div>
    );
};