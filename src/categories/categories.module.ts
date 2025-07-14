import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]), // 👈 Esto registra el repositorio
  ],
  controllers: [CategoriesController], // 👈 Ya importado arriba
  providers: [CategoriesService], // 👈 Ya importado arriba
})
export class CategoriesModule {}
