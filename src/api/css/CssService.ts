import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { parserBdStructure } from '../../lib/parserBdStructure';
import { ComponentService } from '../component/ComponentService';

@Injectable()
export class CssService {
  constructor(
    @InjectClient() private readonly pg: Client,
    private readonly componentService: ComponentService
  ) { }
  public async generatorCssComponentId(id: number) {
    const css = await this.componentService.getComponentIdSelectCss(id);
    return this.generatorCss(css);
  }
  public async generatorCssComponentTemplateId(id: number) {
    const css = await this.componentService.getComponentTemplateCssId(id);
    return this.generatorCss(css);
  }
  private generatorCss(style: any) {
    let css_result = "";
    style.map((elem: any) => {
      css_result += `${elem.select}{`;
      for (const key in elem.css) {
        const element = elem.css[key];
        css_result += `${key}:${element};`;
      }
      css_result += `}`;
    });
  }
}
