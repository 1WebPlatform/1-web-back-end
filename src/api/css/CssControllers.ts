import { Controller, Get, Headers, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CssService } from './CssService';

@ApiTags('css')
@Controller('css')
export class CssControllers {
  constructor(private readonly cssService: CssService) {}
  @Get(':id')
  /** контроллер для тестов */
  async generationCssComponentId(
    @Param('id') id: number,
  ): Promise<any> {
    this.cssService.generatorCssComponentId(id);
  }
}
