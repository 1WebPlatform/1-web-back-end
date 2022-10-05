import { Module } from '@nestjs/common';
import { ComponentControllers } from './ComponentControllers'
import { ComponentService } from './ComponentService'
@Module({
  imports: [],
  controllers: [ComponentControllers],
  providers: [ComponentService],
  exports: [],
})
export class ComponentModule {}
