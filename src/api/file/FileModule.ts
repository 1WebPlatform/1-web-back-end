import { Module } from '@nestjs/common';
import { FileService } from './FileService';

@Module({
  imports: [],
  controllers: [],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
