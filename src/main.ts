import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Log4jsLogger } from '@nestx-log4js/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useLogger(app.get(Log4jsLogger));
  app.enableCors();
  console.log(join(__dirname, '../../public'));  
  app.useStaticAssets(join(__dirname, '../../public'),{
    prefix: "/public/"
  })
  const config = new DocumentBuilder()
    .setTitle('1-web')
    .setDescription('API back-end 1-web')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
