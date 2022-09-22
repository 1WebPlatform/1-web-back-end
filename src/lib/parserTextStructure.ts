import {QueryResult} from "pg";

export function parserTextStructure(result: QueryResult){
    if (result.fields.length !== 1){

        result.rows.map((r)=>{
            for (const key in r) {
                if (key == "_error"){
                    r[key] = parserError(r[key])
                }
                console.log(r[key]);
            }
        });
    }
    return result;
}

function parserError(data:any){
    console.log(data);
    return data;
}