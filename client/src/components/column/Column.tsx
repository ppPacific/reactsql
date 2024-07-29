import {Grid} from "@mantine/core";
import clsx from "clsx";


const Column =({children,name,className}:{children?:any; name: string;className?:string})=>{

    return (
        <Grid grow gutter="sm">
            {/*map children? each col*/}
            <Grid.Col
                span={12}
                className={"bg-gray-200 min-w-56 min-h-24 p-2"}
            >
                {name}
                <div className={clsx(className,"w-full p-2 flex justify-center")}>
                    {children ? children : <span className='text-gray-300'>DRAG HERE</span>}
                </div>
            </Grid.Col>
        </Grid>
    )
}
export default Column;