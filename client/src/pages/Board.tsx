import {Grid} from "@mantine/core";


const Board =()=>{

    return (

            <Grid grow gutter="sm">
                <Grid.Col span={4} className={"bg-yellow-400"}>1</Grid.Col>
                <Grid.Col span={4}>2</Grid.Col>
                <Grid.Col span={4}>3</Grid.Col>
                <Grid.Col span={4}>4</Grid.Col>
                <Grid.Col span={4}>5</Grid.Col>
            </Grid>

    )
}

export default Board;