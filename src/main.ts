import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin:'http://localhost:8100',
    methods: 'GET, HEAD, PU, PATCH, POST, DELETE'
  })

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();



