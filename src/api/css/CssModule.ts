import { Module } from '@nestjs/common';
import { CssControllers } from './CssControllers'
import { CssService } from './CssService'
@Module({
  imports: [],
  controllers: [CssControllers],
  providers: [CssService],
  exports: [],
})
export class CssModule {}
