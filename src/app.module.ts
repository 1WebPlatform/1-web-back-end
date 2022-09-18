import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Log4jsModule } from '@nestx-log4js/core';
import {ConfigModule} from "@nestjs/config";
import {PostgresModule} from "nest-postgres";
import { configModule } from 'configure.root';
@Module({
  imports: [
    Log4jsModule.forRoot(),
    ConfigModule.forRoot(),
    configModule,
    PostgresModule.forRoot({
      connectionString: process.env.URL_BD
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
