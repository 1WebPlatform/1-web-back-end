import { ApiProperty } from '@nestjs/swagger';
import { BodyAny } from '../../interface/BodyAny';

export class ProceduresDto {
  @ApiProperty()
  tec: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  body: BodyAny;
}
