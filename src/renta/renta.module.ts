import { Module } from '@nestjs/common';
import { RentaService } from './renta.service';
import { RentaController } from './renta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Renta } from './entities/renta.entity';
import { Articulo } from 'src/articulo/entities/articulo.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  controllers: [RentaController],
  imports: [TypeOrmModule.forFeature([Renta,Articulo,Usuario])],
  providers: [RentaService],
})
export class RentaModule {}
