import "../styles/globals.css";

export function TopbarFilterView(props){

    return(
        <div className="topbar-filter-view">
            <h2>Topbar Filter Stub View</h2>
            <p>Restaurant ID: {props.restaurantId}</p>
        </div>
    );
};