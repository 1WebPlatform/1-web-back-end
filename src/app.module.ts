import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Log4jsModule } from '@nestx-log4js/core';
import {ConfigModule} from "@nestjs/config";
@Module({
  imports: [
    Log4jsModule.forRoot(),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
