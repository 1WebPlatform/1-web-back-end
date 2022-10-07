import { Module } from '@nestjs/common';
import { ComponentModule } from '../component/ComponentModule';
import { FileModule } from '../file/FileModule';
import { CssControllers } from './CssControllers'
import { CssService } from './CssService'
@Module({
  imports: [ComponentModule, FileModule],
  controllers: [CssControllers],
  providers: [CssService],
  exports: [],
})
export class CssModule {}
