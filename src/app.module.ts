import { Module } from '@nestjs/common';
import { Log4jsModule } from '@nestx-log4js/core';
import { ConfigModule } from '@nestjs/config';
import { PostgresModule } from 'nest-postgres';
import { configModule } from 'configure.root';
import { ProceduresModule } from './api/procedures/ProceduresModule';
import { RightModule } from './api/right/RightModule';
import { ScreenModule } from './api/screen/ScreenModule';
import { CssModule } from './api/css/CssModule';
@Module({
  imports: [
    ScreenModule,
    ProceduresModule,
    CssModule,
    RightModule,
    Log4jsModule.forRoot(),
    ConfigModule.forRoot(),
    configModule,
    PostgresModule.forRoot({
      connectionString: process.env.URL_BD,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
