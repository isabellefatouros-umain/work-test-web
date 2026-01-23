import "../styles/globals.css";

export function SuspenseView(props){
    if (!props.promise){
        return <span>no data</span>;
    } if (props.promise && props.error){
        return <span>{props.error.toString()}</span>;
    };
    return <div>Loading...</div>;
};