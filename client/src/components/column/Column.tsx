import {Grid} from "@mantine/core";
import clsx from "clsx";


const Column =({children,name,inner,outer,selected,setActiveCard}:{children?:any; name: string;inner?:string;outer?:string;selected?:any[];setActiveCard?:()=>{}})=>{

    return (
        <Grid grow gutter="sm">
            {/*map children? each col*/}
            {/*{selected?.map((item,index)=>{*/}
            {/*    return <Grid.Col*/}
            {/*        span={1}*/}
            {/*        className={clsx(outer,"bg-gray-200 min-w-56 min-h-24 p-2")}*/}
            {/*        key={`c-${index}`}*/}
            {/*    >*/}
            {/*        <span>{item.type}</span>*/}
            {/*        <div className={clsx(inner,"w-full p-2 flex flex-col justify-center")}>*/}
            {/*            {children ? children : <span className='text-gray-300'>DRAG HERE</span>}*/}
            {/*        </div>*/}
            {/*    </Grid.Col>*/}
            {/*})}*/}
            <Grid.Col
                span={12}
                className={clsx(outer,"bg-gray-200 min-w-56 min-h-24 p-2")}
            >
                <span>{name}</span>
                <div className={clsx(inner,"w-full p-2 flex flex-col justify-center")}>
                    {children ? children : <span className='text-gray-300'>DRAG HERE</span>}
                </div>
            </Grid.Col>
        </Grid>
    )
}
export default Column;