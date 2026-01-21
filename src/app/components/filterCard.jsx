import './styles/style.css';

export function FilterCard({props}) {

  return (
    <div className="filter-card">
        <div className="filter-name">{props.name}</div>
        <div className="filter-type-img">
            <img src={props.image} draggable="false" />
        </div>
    </div>
  );
}