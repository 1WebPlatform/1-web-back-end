import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { parserTextStructure } from '../../lib/parserTextStructure';

@Injectable()
export class RightService {
  constructor(@InjectClient() private readonly pg: Client) {}

  public async checkRightFun(schema: string, name: string) {
    const result = await this.pg.query(
      `select * from tec.right_fun_get_find('${schema}', '${name}')`,
    );
    parserTextStructure(result);
    return result.rows;
  }
  public async checkRightUser(token: string, id: number) {
    const result = await this.pg.query(
      `select * from tec.right_user_check('${token}', '${id}');`,
    );
    parserTextStructure(result);
    return result.rows;
  }

  public async getRightUser(token: string) {
    const result = await this.pg.query(
      `select * from tec.token_get_id('${token}');`,
    );
    parserTextStructure(result);
    return result.rows[0];
  }
}
