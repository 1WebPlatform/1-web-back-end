import { Controller, Get, Headers, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ScreenService } from './ScreenService';

@ApiTags('screen')
@Controller('screen')
export class ScreenControllers {
  constructor(private readonly screenService: ScreenService) {}
  @Get(':id')
  async screen(
    @Param('id') id: number,
    @Headers('authorization') authorization: string,
  ): Promise<any> {
    return await this.screenService.screen(id, authorization);
  }
}
