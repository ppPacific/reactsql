import Column from "../components/column/Column.tsx";
import {useEffect, useState} from "react";
import {ColumnTypes} from "../components/constants/enums.ts";
import Widgets from "../components/widgets/Widgets.tsx";
import WidgetContainer from "../components/widgetsContainer/WidgetContainer.tsx";


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
    return (
            <div className={"min-w-full p-2 flex flex-row gap-3"}>
                <Column selected={selected} name={SELECTED} outer={"md:w-[48rem] w-[24rem]"}>

                    {selected?.map((item,index)=>{
                        return <WidgetContainer setActiveCard={setActiveCard} key={`${item.type}-${index}`} type={item.type} className={"hover:border-[1px] hover:border-purple-600"}></WidgetContainer>
                    })}
                    {/*<Button className={"rounded-xl bg-gray-800 p-2 text-white"}>Test Click!</Button>*/}
                </Column>
                <Column name={WIDGETS} inner={"flex-col gap-3"}>
                    {orders?.map((item)=>{
                        return <Widgets key={item.id} name={item.title} className={"bg-gray-300 rounded-md"}></Widgets>
                    })}
                </Column>
            </div>
    )
}

export default Board;