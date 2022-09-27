import { Module } from '@nestjs/common';
import { ScreenControllers } from './ScreenControllers';
import { RightModule } from '../right/RightModule';
import { ScreenService } from './ScreenService';

@Module({
  imports: [RightModule],
  controllers: [ScreenControllers],
  providers: [ScreenService],
  exports: [ScreenService],
})
export class ScreenModule {}
