import { observer } from "mobx-react-lite";
import { RestaurantFilter } from "./presenters/restaurantFilterPresenter.jsx";
import { SuspenseView } from "./views/suspenseView.jsx";

export const ReactRoot = observer(function ReactRoot(props){
        if (!props.model.ready){
            return (
                <div> 
                    <SuspenseView promise={props.model.filterResultsPromiseState.promise} 
                                error={props.model.filterResultsPromiseState.error}/>
                </div>
            );
        }
        return (
            <div>
                <RestaurantFilter model={props.model} />
            </div>
        );
    }     
)