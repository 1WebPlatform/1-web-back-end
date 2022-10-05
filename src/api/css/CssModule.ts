import { Module } from '@nestjs/common';
import { ComponentModule } from '../component/ComponentModule';
import { CssControllers } from './CssControllers'
import { CssService } from './CssService'
@Module({
  imports: [ComponentModule],
  controllers: [CssControllers],
  providers: [CssService],
  exports: [],
})
export class CssModule {}
