import clsx from "clsx";


const Widgets =({children,name,className}:{children?:any; name: string;className?:string})=>{


    return (
        <div className={clsx(className,"p-2")}>
            <span>{name}</span>
            {children}

        </div>
    )
}

export default Widgets;