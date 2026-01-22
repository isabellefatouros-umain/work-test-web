import "../styles/globals.css";
import { RestaurantCard } from "../components/restaurantCard.jsx";

export function FilterResultsView(props){
    if (!props.restaurants) {
        return <div>Laddar restauranger...</div>;
    }

    return(
        <div className="filter-results-parent">
            <h2 className="filter-results-title">Restaurant’s</h2>

            <div className="filter-results-content">
                {props.restaurants.length === 0 ? (
                    <p>Inga restauranger matchar dina filter.</p>
                ) : (
                    props.restaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))
                )}
                
            </div>
        </div>
    );
};
