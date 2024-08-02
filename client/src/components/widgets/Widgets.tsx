import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines} from "@fortawesome/free-solid-svg-icons";


const Widgets =({index,children,name,className,setActiveCard}:{index?:string;children?:any; name: string;className?:string;setActiveCard:(type:any)=>void})=>{


    return (
        <div
            draggable
            onDragStart={()=>setActiveCard(index)}
            onDragEnd={()=>setActiveCard(null)}
            className={clsx(className,"p-2")}>
            <span><FontAwesomeIcon icon={faFileLines} />{name}</span>
            {children}
        </div>
    )
}

export default Widgets;