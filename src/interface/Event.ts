import { FindData } from "./FindData";
import { ObjectAny } from "./ObjectAny";

export interface Event {
    [key: string]: {
        fun: string,
        params: {
            [key: string]: FindData | FindData[]
        }
    }[];
};