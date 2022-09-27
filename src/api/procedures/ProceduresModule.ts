import { Module } from '@nestjs/common';
import { ProceduresController } from './ProceduresControllers';
import { ProceduresService } from './ProceduresService';
import { RightModule } from '../right/RightModule';

@Module({
  imports: [RightModule],
  controllers: [ProceduresController],
  providers: [ProceduresService],
  exports: [ProceduresService],
})
export class ProceduresModule {}
