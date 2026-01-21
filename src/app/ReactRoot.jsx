import { Filter } from "./filterPresenter.jsx";
import { SidebarFilter } from "./sidebarFilterPresenter.jsx";
import { TopbarFilter } from "./topbarFilterPresenter.jsx";
import { SuspenseView } from "/src/views/suspenseView.jsx";
import {createHashRouter,  RouterProvider} from "react-router-dom"

export const ReactRoot = observer(
    function ReactRoot(props){
        const router = createHashRouter([
        {path: "/", element: <Search model={props.model} />,},
    ])
        if (!props.model.ready){
            return <div> 
                <div><SuspenseView promise = {""} model = {props.model}/></div>
            </div>
        } else {
        return (<div className = "flexParent">
                    <div className = "sideBarFilter"><SidebarFilter model={props.model} /></div>
                     <div className = "topBarFilter"><TopbarFilter model={props.model} /></div>
                    <div className = "mainContent">
                        <RouterProvider router={router} />
                    </div>
                </div>
            );
        };
    }     
)