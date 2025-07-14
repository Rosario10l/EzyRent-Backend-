import { Module } from '@nestjs/common';
import { SolicitudRentadorService } from './solicitud-rentador.service';
import { SolicitudRentadorController } from './solicitud-rentador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudRentador } from './entities/solicitud-rentador.entity';

@Module({
  controllers: [SolicitudRentadorController],
  imports: [TypeOrmModule.forFeature([SolicitudRentador])],
  providers: [SolicitudRentadorService],
})
export class SolicitudRentadorModule {}
