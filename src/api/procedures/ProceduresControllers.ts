import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProceduresService } from './ProceduresService';
import { ProceduresDto } from './ProceduresDto';

@ApiTags('procedures')
@Controller('procedures')
export class ProceduresController {
  constructor(private readonly proceduresService: ProceduresService) {}
  @Post()
  async procedures(@Body() proceduresDto: ProceduresDto): Promise<any> {
    console.log(proceduresDto);
    return await this.proceduresService.procedures(proceduresDto);
  }
}
