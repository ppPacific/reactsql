import {ColumnTypes} from "./enums.ts";

export interface WidgetProps {
    id: number;
    title: string;
    column: ColumnTypes;
}

export interface dragItem {
    index: number;
    id: WidgetProps["id"];
}