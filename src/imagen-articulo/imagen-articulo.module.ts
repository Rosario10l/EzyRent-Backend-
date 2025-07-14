import { Module } from '@nestjs/common';
import { ImagenArticuloService } from './imagen-articulo.service';
import { ImagenArticuloController } from './imagen-articulo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenArticulo } from './entities/imagen-articulo.entity';

@Module({
  controllers: [ImagenArticuloController],
  imports: [TypeOrmModule.forFeature([ImagenArticulo])],
  providers: [ImagenArticuloService],
})
export class ImagenArticuloModule {}
