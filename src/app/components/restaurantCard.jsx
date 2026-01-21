import './styles/style.css';

export function SoundCard({props}) {

  return (
    <div className="restaurant-card">
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-open">Rating: {props.is_currently_open}</div>
        <div className="restaurant-delivery-time">{props.delivery_time_minutes} min</div>
        <div className="restaurant-type-img">
            <img src={props.image} draggable="false" />
        </div>
        <div className="arrow-icon"> 
            <img src="/web/assets/icons/arrow-right-icon.svg" draggable="false" />
        </div>
    </div>
  );
}