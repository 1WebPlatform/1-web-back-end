import { Controller, Get, Headers, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComponentService } from './ComponentService';

@ApiTags('component')
@Controller('component')
export class ComponentControllers {
  constructor(private readonly componentService: ComponentService) {}
  @Get(':id')
  async getComponentIdSelectCss(
    @Param('id') id: number,
  ): Promise<any> {
    
  }
}
