import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { ComponentService } from '../component/ComponentService';
import { FileService } from '../file/FileService';

@Injectable()
export class CssService {
  constructor(
    @InjectClient() private readonly pg: Client,
    private readonly componentService: ComponentService,
    private readonly fileService: FileService
  ) { }
  public async generatorCssComponentId(id: number) {
    const css = await this.componentService.getComponentIdSelectCss(id);
    const textCss = this.generatorCss(JSON.parse(css));
  }
  public async generatorCssComponentTemplateId(id: number) {
    const template = await this.componentService.getComponentTemplateCssId(id);
    const textCss = this.generatorCss(JSON.parse(template.css));
    this.fileService.setFile(
      `${process.env.URL_STATIC}\\style\\template`,
      `${template.name}.css`,
      textCss
    );
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
    return css_result;
  }
}
