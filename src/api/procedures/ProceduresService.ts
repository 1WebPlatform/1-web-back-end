import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { ProceduresDto } from './ProceduresDto';
import { ObjectAny } from '../../interface/ObjectAny';
import { RightService } from '../right/RightService';
import { parserBdStructure } from '../../lib/parserBdStructure';

@Injectable()
export class ProceduresService {
  constructor(
    @InjectClient() private readonly pg: Client,
    private readonly rightService: RightService,
  ) {}
  public async procedures(proceduresDto: ProceduresDto, authorization: string) {
    const check_fun = await this.rightService.checkRightFun(
      proceduresDto.schema,
      proceduresDto.name,
    );

    if (check_fun?.[0]?.id_right) {
      const check_user = await this.rightService.checkRightUser(
        authorization,
        check_fun[0].id_right,
      );     
      if (check_user?.[0]?.error_ !== undefined && check_user?.[0]?.error_ !== null) {
        return check_user[0];
      }
    }
    return this.proceduresStart(proceduresDto);
  }

  private async proceduresStart(proceduresDto: ProceduresDto) {
    const result = await this.pg.query(
      `select * from ${proceduresDto.schema}.${
        proceduresDto.name
      }(${ProceduresService.generatorBody(proceduresDto.body)})`,
    );   
    return parserBdStructure(result);
  }

  private static generatorBody(body: ObjectAny): string {
    let sql = '';
    for (const key in body) {
      if (typeof body[key] === 'string') {
        sql += `${key} => '${body[key]}',`;
      } else {
        sql += `${key} => ${body[key]},`;
      }
    }
    return sql.substring(0, sql.length - 1);
  }
}
