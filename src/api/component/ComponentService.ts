import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { parserBdStructure } from '../../lib/parserBdStructure';

@Injectable()
export class ComponentService {
  constructor(
    @InjectClient() private readonly pg: Client,
  ) {}
  public async getComponentIdSelectCss(id:number){
    const result = await this.pg.query(
      `select * from config.component_select_css_get_id(${id})`,
    );
    return result.rows?.[0]?.css;
  }
  public async getComponentTemplateCssId(id:number){
    const result = await this.pg.query(
      `select * from config.css_tempale_get_id(${id})`,
    );
    return result.rows?.[0];
  }
}
