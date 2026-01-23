import '../styles/globals.css';

export function RestaurantCard({restaurant}) {

  return (
    <div className="restaurant-card">
        <div className="restaurant-name">{restaurant.name}</div>
        <div className="restaurant-open">
          <span className ="lower-text">{restaurant.is_currently_open? "Open" : "Closed"}</span>
          </div>
        <div className="restaurant-delivery-time">
          <span className="lower-text">{restaurant.delivery_time_minutes} min</span>
        </div> 
    </div>
  );
}
