import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines} from "@fortawesome/free-solid-svg-icons";


const Widgets =({index,children,name,className,setActiveWidget}:{index?:number;children?:any; name: string;className?:string;setActiveWidget:(type:any)=>void})=>{


    return (
        <div
            draggable
            onDragStart={()=>setActiveWidget(index)}
            onDragEnd={()=>setActiveWidget(null)}
            className={clsx(className,"p-2")}>
            <span><FontAwesomeIcon icon={faFileLines} />{name}</span>
            {children}
        </div>
    )
}

export default Widgets;