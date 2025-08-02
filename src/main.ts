import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Se crea la aplicación NestJS con el módulo principal
  const app = await NestFactory.create(AppModule);

  // Se agregan pipes globales para validar los DTOs automáticamente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades que no están en el DTO
      forbidNonWhitelisted: true, // Lanza error si se envían propiedades no permitidas
      transform: true, // Transforma automáticamente los tipos (por ejemplo, de string a number)
    }),
  );

  // Se habilita CORS para permitir solicitudes del frontend que corre en localhost:8100
  app.enableCors({
    origin: 'http://localhost:8100',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // Se inicia el servidor en el puerto definido o por defecto en el 3000
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
