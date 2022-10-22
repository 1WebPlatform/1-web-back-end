import { FindData } from "./FindData";

export interface Event {
    [key: string]: {
        fun: string,
        params: {
            [key: string]: FindData | FindData[]
        }
    }[];
};