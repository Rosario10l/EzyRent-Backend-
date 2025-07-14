import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';

@Module({
  controllers: [CategoriaController],
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
})
export class CategoriaModule {}
