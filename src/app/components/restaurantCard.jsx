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
        <div className="restaurant-type-img">
            <img src={restaurant.image_url} draggable="false" />
        </div>
        <div className="arrow-icon"> 
            <img src="/web/assets/icons/arrow-right-icon.svg" draggable="false" />
        </div>
    </div>
  );
}
