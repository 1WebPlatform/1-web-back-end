import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { ProceduresDto } from './ProceduresDto';
import { BodyAny } from '../../interface/BodyAny';
import { RightService } from '../right/RightService';

@Injectable()
export class ProceduresService {
  constructor(
    @InjectClient() private readonly pg: Client,
    private readonly rightService: RightService
  ) {}
  public async procedures(proceduresDto: ProceduresDto, authorization:string) {
    const check_fun = await this.rightService.checkRightFun(proceduresDto.schema, proceduresDto.name);
    if (check_fun?.[0]?.id_right){
      const check_user = await this.rightService.checkRightUser(authorization, check_fun[0].id_right);
      if (check_user){
        return check_user;
      }
    }
    return this.proceduresStart(proceduresDto);
  }

  private async proceduresStart(proceduresDto: ProceduresDto){
    const result = await this.pg.query(
        `select * from ${proceduresDto.schema}.${
            proceduresDto.name
        }(${ProceduresService.generatorBody(proceduresDto.body)})`,
    );
    return result.rows;
  }

  private static generatorBody(body: BodyAny): string {
    let sql = '';
    for (const key in body) {
      if (typeof body[key] === 'string') {
        sql += `${key} => '${body[key]}'`;
      } else {
        sql += `${key} => ${body[key]}`;
      }
    }
    return sql;
  }
}
