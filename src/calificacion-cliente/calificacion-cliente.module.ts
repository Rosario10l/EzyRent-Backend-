import { Module } from '@nestjs/common';
import { CalificacionClienteService } from './calificacion-cliente.service';
import { CalificacionClienteController } from './calificacion-cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionCliente } from './entities/calificacion-cliente.entity';

@Module({
  controllers: [CalificacionClienteController],
  imports: [TypeOrmModule.forFeature([CalificacionCliente])],
  providers: [CalificacionClienteService],
})
export class CalificacionClienteModule {}
