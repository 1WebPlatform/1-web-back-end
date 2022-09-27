import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { parserBdStructure } from '../../lib/parserBdStructure';

@Injectable()
export class RightService {
  constructor(@InjectClient() private readonly pg: Client) {}

  public async checkRightFun(schema: string, name: string) {
    const result = await this.pg.query(
      `select * from tec.right_fun_get_find('${schema}', '${name}')`,
    );
    return parserBdStructure(result);
  }
  public async checkRightUser(token: string, id: number) {
    const result = await this.pg.query(
      `select * from tec.right_user_check('${token}', '${id}');`,
    );
    return parserBdStructure(result);
  }

  public async getRightUser(token: string) {
    const result = await this.pg.query(
      `select * from tec.token_get_id('${token}');`,
    );
    return parserBdStructure(result);
  }
}
