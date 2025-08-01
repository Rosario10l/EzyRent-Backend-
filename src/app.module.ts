import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticuloModule } from './articulo/articulo.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { CalificacionClienteModule } from './calificacion-cliente/calificacion-cliente.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ImagenArticuloModule } from './imagen-articulo/imagen-articulo.module';
import { RentaModule } from './renta/renta.module';
import { SolicitudRentadorModule } from './solicitud-rentador/solicitud-rentador.module';
import { UsuarioModule } from './usuario/usuario.module';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ReseñasModule } from './reseñas/reseñas.module';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======

import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity'; // Importa la entidad Category
>>>>>>> respaldo-temporal

@Module({
  imports: [
    ArticuloModule,
    HttpClientModule,
    CalificacionModule,
    CalificacionClienteModule,
    CategoriaModule,
    ImagenArticuloModule,
    RentaModule,
    SolicitudRentadorModule,
    UsuarioModule,
<<<<<<< HEAD
=======
    ReseñasModule,
    CategoriesModule,

    // Configura JWT
    JwtModule.register(<JwtModuleOptions>{
      secret: process.env.JWT_SECRET || 'supersecreto',
      signOptions: { expiresIn: '1h' },
    }),

    // Configuración de TypeORM con entidades explícitas
>>>>>>> respaldo-temporal
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
<<<<<<< HEAD
      database: 'renta_app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    ReseñasModule,
    JwtModule.register(<JwtModuleOptions>{
      secret: process.env.JWT_SECRET || 'supersecreto',
      signOptions: { expiresIn: '1h' },
    }),
=======
      database: 'ezyrent',
      entities: [Category], // Puedes usar también autoLoadEntities: true si no quieres importarlas una por una
      synchronize: true,
    }),
>>>>>>> respaldo-temporal
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
