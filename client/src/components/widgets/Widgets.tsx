import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines} from "@fortawesome/free-solid-svg-icons";


const Widgets =({children,name,className}:{children?:any; name: string;className?:string})=>{


    return (
        <div className={clsx(className,"p-2")}>
            <span><FontAwesomeIcon icon={faFileLines} />{name}</span>
            {children}
        </div>
    )
}

export default Widgets;