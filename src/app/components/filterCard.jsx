import "../styles/globals.css";

export function FilterCard({filter, props}) {
  return (
    <div className="filter-card-wrapper">
      <button key={filter.id}
              className={"filter-card " + (props.activeFilters.includes(filter.id) ? "active" : "")}
              onClick={() => props.onFilterClick(filter.id)}>
        <span className="filter-text">{filter.name}</span>
      </button>
      
      <div className="filter-image-container">
        <img className="filter-image" src={filter.image_url} alt={filter.name} />
      </div>
    </div>
  );
}