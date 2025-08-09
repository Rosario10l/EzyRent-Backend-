import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin:'http://localhost:8100',
    methods: 'GET, HEAD, PU, PATCH, POST, DELETE'
  })

  await app.listen(3000);

}
bootstrap();