import { Params } from "./Params";

export interface Component {
    id: number,
    name:string,
    description: string,
    id_type: number,
    id_right: number,
    id_parent: number,
    params: Params,
    event: Event,
    schema: any,
    style: string,
    file_css: boolean,
    _tec: any,
    children: number[]
}