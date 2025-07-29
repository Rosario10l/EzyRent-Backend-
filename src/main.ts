import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

   // Permitir CORS para http://localhost:8100
  app.enableCors({
    origin: 'http://localhost:8100', // o '*' para permitir todos (menos seguro)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

 await app.listen(process.env.PORT ?? 3000);
}



bootstrap();
