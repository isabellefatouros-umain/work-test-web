import "../styles/globals.css";

export function TopbarFilterView(props){

    return(
        <div className="topbar-filter-parent">
            <topbarFilterCard props={props} />
        </div>
    );
};

function topbarFilterCard({props}) {
  return (
    <div id={props.id} className="topbar-filter-card">
        <div className="topbar-filter-label">{props.name}</div>
        <div className="topbar-filter-img-container">
            <img className="topbar-filter-img" src={props.image} style={{background: `url(${props.image}) lightgray 50% / cover no-repeat`, draggable: false}}/>
        </div>
    </div>
  );
}