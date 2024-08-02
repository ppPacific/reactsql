import {Grid} from "@mantine/core";
import clsx from "clsx";


const Column =({children,name,inner,portion,outer,selected,setActiveCard}:{children?:any; name: string;inner?:string;outer?:string;portion?:string;selected?:any[];setActiveCard?:(type:any)=>void})=>{

    return (
        <Grid grow gutter="sm" className={clsx(outer,"bg-gray-200 min-w-56 min-h-24 p-2")}>
            <span>{name}</span>
            {name!=="Widgets"&&<Grid.Col
                span={12}
                className={clsx(portion, "")}
            >
                <div className={clsx(inner, "w-full p-2 flex flex-col justify-center")}>
                    {children ? children : <span className='text-gray-300'>DRAG HERE</span>}
                </div>
            </Grid.Col>}
            {/*{selected && <DropArea/>}*/}
            {/*{name === "Selected" && selected?.map((item, index) => {*/}
            {/*    return <React.Fragment key={`${item.type}-${index}`}>*/}
            {/*        <Grid.Col*/}
            {/*            span={12}*/}
            {/*            className={clsx(portion, "")}*/}
            {/*            key={`c-${index}`}*/}
            {/*        >*/}
            {/*            <WidgetContainer*/}
            {/*                setActiveCard={setActiveCard ? setActiveCard : () => {*/}
            {/*                }}*/}
            {/*                index={`selected ${index}`}*/}
            {/*                type={item.type}*/}
            {/*                className={"hover:border-[1px] hover:border-purple-600"}>*/}
            {/*            </WidgetContainer>*/}
            {/*            /!*<span>{item.type}</span>*!/*/}
            {/*            /!*<div className={clsx(inner,"w-full p-2 flex flex-col justify-center")}>*!/*/}
            {/*            /!*    {children ? children : <span className='text-gray-300'>DRAG HERE</span>}*!/*/}
            {/*            /!*</div>*!/*/}
            {/*        </Grid.Col>*/}
            {/*        <DropArea/>*/}
            {/*    </React.Fragment>*/}
            {/*})}*/}
            {name === "Widgets" && <Grid.Col
                span={12}
                className={clsx(outer, "")}
            >
                <div className={clsx(inner, "w-full p-2 flex flex-col justify-center")}>
                    {children ? children : <span className='text-gray-300'>DRAG HERE</span>}
                </div>
            </Grid.Col>}
        </Grid>
    )
}
export default Column;