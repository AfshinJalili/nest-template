import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { HttpConfig } from './config/types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();
  app.setGlobalPrefix('api/v1');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const documentConfig = new DocumentBuilder()
    .setTitle('Nest Template')
    .setDescription('The Nest Template Project APIs Specs.')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('docs', app, document);

  const httpConfig = app.get(ConfigService).get<HttpConfig>('http');
  await app.listen(httpConfig.port, httpConfig.host);
}

bootstrap();
