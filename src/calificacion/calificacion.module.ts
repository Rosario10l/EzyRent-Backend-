import { Module } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CalificacionController } from './calificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calificacion } from './entities/calificacion.entity';

@Module({
  controllers: [CalificacionController],
  imports: [TypeOrmModule.forFeature([Calificacion])],
  providers: [CalificacionService],
})
export class CalificacionModule {}
