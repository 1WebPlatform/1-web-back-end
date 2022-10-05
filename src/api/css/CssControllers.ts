import { Controller, Get, Headers, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('css')
@Controller('css')
export class CssControllers {
  constructor(private readonly cssService: any) {}
  @Get(':id')
  /** контроллер для тестов */
  async generationCss(
    @Param('id') id: number,
  ): Promise<any> {
   
  }
}
