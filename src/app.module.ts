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
import { ReseñasModule } from './reseñas/reseñas.module';

@Module({
  imports: [
    ArticuloModule,
    CalificacionModule,
    CalificacionClienteModule,
    CategoriaModule,
    ImagenArticuloModule,
    RentaModule,
    SolicitudRentadorModule,
    UsuarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'renta_app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReseñasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
