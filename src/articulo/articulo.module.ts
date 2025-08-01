import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticuloService } from './articulo.service';
import { ArticuloController } from './articulo.controller';
import { Articulo } from './entities/articulo.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Articulo, Usuario, Categoria]),
  ],
  controllers: [ArticuloController],
  providers: [ArticuloService],
})
export class ArticuloModule {}
