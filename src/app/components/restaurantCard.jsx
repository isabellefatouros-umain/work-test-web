import '../styles/globals.css';

export function RestaurantCard({restaurant}) {
  return (
    <div className="restaurant-card">
        <div className="restaurant-name">{restaurant.name}</div>
        <div className="restaurant-text-container">
          <span className ="lower-text">{restaurant.is_currently_open? "Open" : "Closed"}</span>
          </div>
        <div className="restaurant-text-container">
          <span className="lower-text">{restaurant.delivery_time_minutes} min</span>
        </div> 
        <div className="restaurant-image-container">
          <img className="restaurant-image" src={restaurant.image_url} alt={restaurant.name} />
        </div> 
    </div>
  );
}
