import { observer } from "mobx-react-lite";
import { SidebarFilter } from "./presenters/sidebarFilterPresenter.jsx";
import { TopbarFilter } from "./presenters/topbarFilterPresenter.jsx";
import { SuspenseView } from "./views/suspenseView.jsx";

export const ReactRoot = observer(
    function ReactRoot(props){
        console.log("ReactRoot props.model:", props.model);
        console.log("ReactRoot props.model.ready:", props.model.ready);
        
        // TEMPORÄRT: Visa alltid innehållet för att testa
        return (
            <div className="flexParent">
                <div style={{ background: '#fafafa', padding: '1rem', marginBottom: '1rem' }}>
                    <p>Model Ready: {props.model.ready ? "Yes" : "No"}</p>
                </div>

                <div className="topBarFilter">
                    <h3>Topbar Filter</h3>
                    <TopbarFilter model={props.model} />
                </div>
                
                <div className="sideBarFilter">
                    <h3>Sidebar Filter</h3>
                    <SidebarFilter model={props.model} />
                </div>
                
                <div className="mainContent">
                    <h3>Main Content</h3>
                    <p>Filter results skulle visas här...</p>
                </div>
            </div>
        );
    }     
)

/*import { observer } from "mobx-react-lite"; 
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
)*/