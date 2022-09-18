import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Log4jsLogger} from "@nestx-log4js/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Log4jsLogger));
  const config = new DocumentBuilder()
      .setTitle('1-web')
      .setDescription('API back-end 1-web')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
