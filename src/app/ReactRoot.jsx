import { observer } from "mobx-react-lite";
import { RestaurantFilter } from "./presenters/restaurantFilterPresenter.jsx";
import { SuspenseView } from "./views/suspenseView.jsx";

export const ReactRoot = observer(
    function ReactRoot(props){
        console.log("=== ReactRoot Debug ===");
        console.log("Model:", props.model);
        console.log("Model ready:", props.model.ready);
        console.log("Promise state:", props.model.filterResultsPromiseState);
        console.log("All restaurants:", props.model.allRestaurants);
        
        if (!props.model.ready){
            return <div> 
                <h2>Model not ready...</h2>
                <SuspenseView promise={props.model.filterResultsPromiseState.promise} 
                              error={props.model.filterResultsPromiseState.error}/>
            </div>
        }
        
        return (
            <div className="flexParent">
                <RestaurantFilter model={props.model} />
            </div>
        );
    }     
)