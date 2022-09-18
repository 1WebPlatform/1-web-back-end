import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import {ProceduresDto} from "./ProceduresDto";
import {BodyAny} from "../../interface/BodyAny";

@Injectable()
export class ProceduresService {
  constructor(@InjectClient() private readonly pg: Client) {}
  public async procedures(proceduresDto: ProceduresDto) {
    console.log(`select * from ${proceduresDto.tec}.${proceduresDto.name}(${ProceduresService.generatorBody(proceduresDto.body)})`);
    const result = await this.pg.query(`select * from ${proceduresDto.tec}.${proceduresDto.name}(${ProceduresService.generatorBody(proceduresDto.body)})`);
    return result.rows;
  }

  private static generatorBody(body:BodyAny):string{
    let sql = "";
    for (const key in body) {
      sql += `${key} => ${body[key]}`;
    }
    return sql;
  }
}
