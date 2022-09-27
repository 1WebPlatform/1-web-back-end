import { Module } from '@nestjs/common';
import { RightService } from './RightService';

@Module({
  controllers: [],
  providers: [RightService],
  exports: [RightService],
})
export class RightModule {}
