import { Params } from "./Params";
import { TypeComponent } from "./TypeComponent";

export interface Component {
    id: number,
    name: string,
    type: TypeComponent,
    description: string,
    id_type: number,
    id_right: number,
    id_parent: number,
    params: Params | string,
    event: Event | string,
    schema: any,
    style: string,
    file_css: boolean,
    _tec: any,
    children: number[]
}