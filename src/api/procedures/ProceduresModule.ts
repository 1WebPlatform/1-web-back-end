import { Module } from '@nestjs/common';
import { ProceduresController } from './ProceduresControllers';
import { ProceduresService } from './ProceduresService';

@Module({
  controllers: [ProceduresController],
  providers: [ProceduresService],
})
export class ProceduresModule {}
