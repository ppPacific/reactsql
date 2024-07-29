import Column from "../components/column/Column.tsx";
import {Button} from "@mantine/core";


const Board =()=>{

    return (
            <div className={"min-w-full p-2 flex flex-row gap-3"}>
                <Column name={"TEST1"}>
                    <Button className={"rounded-xl bg-gray-800 p-2 text-white"}>Test Click!</Button>
                    {/*<Button className={"rounded-xl bg-gray-800 p-2 text-white"}>Test Click!</Button>*/}
                </Column>
                <Column name={"TEST2"}>{""}</Column>
            </div>
    )
}

export default Board;