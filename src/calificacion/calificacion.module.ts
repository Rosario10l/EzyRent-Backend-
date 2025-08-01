import { Module } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CalificacionController } from './calificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calificacion } from './entities/calificacion.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Renta } from 'src/renta/entities/renta.entity';

@Module({
  controllers: [CalificacionController],
  imports: [TypeOrmModule.forFeature([Calificacion, Usuario, Renta])],
  providers: [CalificacionService],
})
export class CalificacionModule {}
