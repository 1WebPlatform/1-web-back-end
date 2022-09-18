import { ApiProperty } from '@nestjs/swagger';
import { BodyAny } from '../../interface/BodyAny';

export class ProceduresDto {
  @ApiProperty()
  schema: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  body: BodyAny;
}
