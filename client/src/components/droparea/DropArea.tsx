

const DropArea=({onDrop}:{onDrop:()=>void})=>{

    return (<section
        onDrop={()=>onDrop()}
        onDragOver={event => event.preventDefault()}
        className={"text-xs text-gray-300"}
    >drop here
    </section>)
}

export default DropArea;