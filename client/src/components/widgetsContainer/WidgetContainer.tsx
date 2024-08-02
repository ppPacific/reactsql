import clsx from "clsx";
import {Button, Text} from "@mantine/core";


const WidgetContainer =({index,children,name,className,type,setActiveCard}:{index?:string;children?:any; name?: string;className?:string;type:string;setActiveCard:(type:any)=>void})=>{
    const defaultButtonStyle = "rounded-xl bg-gray-800 p-2 text-white";

    const getWidget =(type:string)=>{
        switch(type) {
            case "Text": {
                return <Text>This is free text.</Text>;
            }
            case "Button": {
                return <Button className={defaultButtonStyle}>Test me</Button>;
            }
            case "Heading": {
                return <Text size={"xl"}>This is heading.</Text>;
            }
            default: {
                //statements;
                //break;
                return "";
            }
        }
    }

    return (
        <div
            draggable
            onDragStart={()=>setActiveCard(index)}
            onDragEnd={()=>setActiveCard(null)}
            className={clsx(className,"flex justify-center w-full p-2")}>
            <span>{name}</span>
            {getWidget(type)}
            {children}
        </div>
    )
}

export default WidgetContainer;