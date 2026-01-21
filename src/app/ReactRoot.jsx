import { observer } from "mobx-react-lite"; 
import { Filter } from "./presenters/filterPresenter.jsx";
import { SidebarFilter } from "./presenters/sidebarFilterPresenter.jsx";
import { TopbarFilter } from "./presenters/topbarFilterPresenter.jsx";
import { SuspenseView } from "./views/suspenseView.jsx";

export const ReactRoot = observer(
    function ReactRoot(props){
        if (!props.model.ready){
            return <div> 
                <SuspenseView promise={""} model={props.model}/>
            </div>
        }
        
        return (
            <div className="flexParent">
                <div className="sideBarFilter">
                    <SidebarFilter model={props.model} />
                </div>
                <div className="topBarFilter">
                    <TopbarFilter model={props.model} />
                </div>
                <div className="mainContent">
                    <Filter model={props.model} />
                </div>
            </div>
        );
    }     
)