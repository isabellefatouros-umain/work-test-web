import "../styles/globals.css";
import { RestaurantCard } from "../components/restaurantCard.jsx";
import { SuspenseView } from "./suspenseView.jsx";


export function FilterResultsView(props){
    if (!props.allRestaurants) {
        return <SuspenseView model={props.model}/>;
    }

    return(
        <div className="results-parent">
            <h2 className="results-title">Restaurant’s</h2>

            <div className="results-content">
                {props.allRestaurants.length === 0 ? (
                    <p>Inga restauranger matchar dina filter.</p>
                ) : (
                    props.allRestaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))
                )}  
            </div>
        </div>
    );
};
