import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { parserBdStructure } from '../../lib/parserBdStructure';
import { ComponentService } from '../component/ComponentService';

@Injectable()
export class CssService {
  constructor(
    @InjectClient() private readonly pg: Client,
    private readonly componentService:ComponentService
  ) {}
    public async generatorCss(id: number){
      const css = await this.componentService.getComponentIdSelectCss(id);
    }
}
