import { ApiProperty } from '@nestjs/swagger';
import { ObjectAny } from '../../interface/ObjectAny';

export class ProceduresDto {
  @ApiProperty()
  schema: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  body: ObjectAny;
}
