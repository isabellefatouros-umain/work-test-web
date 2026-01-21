import './styles/style.css';

export function SoundCard({props}) {

  return (
    <div className="restaurant-card">
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-open">
          <span className ="lower-text">{props.is_currently_open}</span>
          </div>
        <div className="restaurant-delivery-time">
          <span className="lower-text">{props.delivery_time_minutes} min</span>
        </div>
        <div className="restaurant-type-img">
            <img src={props.image} draggable="false" />
        </div>
        <div className="arrow-icon"> 
            <img src="/web/assets/icons/arrow-right-icon.svg" draggable="false" />
        </div>
    </div>
  );
}