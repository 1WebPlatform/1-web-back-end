import {Body, Controller, Headers, Post, Request} from '@nestjs/common';
import {ApiBearerAuth, ApiHeader, ApiTags} from '@nestjs/swagger';
import { ProceduresService } from './ProceduresService';
import { ProceduresDto } from './ProceduresDto';

@ApiTags('procedures')
@Controller('procedures')
export class ProceduresController {
  constructor(private readonly proceduresService: ProceduresService) {}
  @Post()
  async procedures(
      @Body() proceduresDto: ProceduresDto,
      @Headers('authorization') authorization: string,
  ): Promise<any> {
    return await this.proceduresService.procedures(proceduresDto, authorization);
  }
}
