import Column from "../components/column/Column.tsx";
import {useEffect, useState} from "react";
import {ColumnTypes} from "../components/constants/enums.ts";
import Widgets from "../components/widgets/Widgets.tsx";
import WidgetContainer from "../components/widgetsContainer/WidgetContainer.tsx";
import React from "react";
import DropArea from "../components/droparea/DropArea.tsx";


const wids = [
    {id:"but", title:"Button", column:"Widgets"},
    {id:"text", title:"Text", column:""},
    {id:"line", title:"Line", column:""},
    {id:"heading", title:"Heading", column:""},
    {id:"image", title:"Image", column:""},
    {id:"menu", title:"Menu", column:""},
];
const defaultSelected = [
    {type:"Text", column:"1"},
    {type:"Button", column:"1"},
    // {id:"line", title:"Line", column:""},
    {type:"Heading", column:"1"},
    // {id:"image", title:"Image", column:""},
    // {id:"menu", title:"Menu", column:""},
];

const Board =()=>{
    const { SELECTED, WIDGETS } = ColumnTypes;
    const [orders, setOrders] = useState<any[] | undefined>([]);
    const [selected, setSelected] = useState<any[] | undefined>([]);
    const [activeCard, setActiveCard] = useState<any | null>(null);

    useEffect(() => {
        setOrders(wids);
    }, []);
    useEffect(() => {
        setSelected(defaultSelected);
    }, []);
    // const columnItem = (columnName: string) => {
    //     return (
    //         orders &&
    //         orders
    //             .filter((order) => order.column === columnName)
    //             .map((order, index) => (
    //                 <Cards
    //                     key={order.id}
    //                     name={order.title}
    //                     material={order.material}
    //                     setOrders={setOrders}
    //                     index={index}
    //                 />
    //             ))
    //     );
    // };
    const onDragAdd =(status:string,position:number)=>{
        console.log(`${activeCard} is dragging to ${status} at ${position}`);
        if(activeCard===null || activeCard ===undefined) return;
    }
    const ref1 = "https://react-email-editor-demo.netlify.app/";
    const ref2 = "https://github.com/topics/email-editor";
    return (
        <>
            <div className={"p-1 bg-gray-400 text-black text-sm flex gap-4"}>
                <a href={ref1} target={"_blank"}>reference</a>
                <a href={ref2} target={"_blank"}>topics github</a>
            </div>

            <div className={"min-w-full p-2 flex flex-row gap-3 relative"}>
                <Column name={SELECTED} outer={"md:w-[48rem] w-[24rem]"}>
                    <DropArea onDrop={()=>{onDragAdd("selected",0)}}/>
                    {selected?.map((item, index) => {
                        return <React.Fragment key={`${item.type}-${index}`}>
                            <WidgetContainer
                            setActiveCard={setActiveCard}
                            index={`selected ${index}`}
                            type={item.type}
                            className={"hover:border-[1px] hover:border-purple-600"}>
                        </WidgetContainer>
                        <DropArea onDrop={()=>{onDragAdd("selected",index+1)}}/>
                        </React.Fragment>
                    })}
                    {/*<Button className={"rounded-xl bg-gray-800 p-2 text-white"}>Test Click!</Button>*/}
                </Column>
                <Column name={WIDGETS} inner={"flex-col gap-3"}>
                    {orders?.map((item, index) => {
                        return <Widgets
                            key={item.id}
                            setActiveCard={setActiveCard}
                            index={`widget ${index}`}
                            name={item.title}
                            className={"bg-gray-300 rounded-md"}></Widgets>
                    })}
                </Column>
            </div>
            <h2>Active Card - {activeCard}</h2>
            <pre className="text-xs">
                <p>{JSON.stringify(selected, null, 4)}</p>
            </pre>
        </>
    )
}

export default Board;