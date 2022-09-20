import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';

@Injectable()
export class RightService {
  constructor(
      @InjectClient() private readonly pg: Client,
  ) {}

  public async checkRightFun(schema: string, name: string) {
    const result = await this.pg.query(`select * from tec.right_fun_get_find('${schema}', '${name}')`);
    return result.rows;
  }
    public async checkRightUser(token:string, id: number) {
        const result = await this.pg.query(`select * from tec.right_user_check('${token}', '${id}');`);
        return result.rows;
    }

    public  async  getRightUser(token:string){
        const result = await this.pg.query(`select * from tec.token_authentication('${token}');`);
        return result.rows[0];
    }
}
