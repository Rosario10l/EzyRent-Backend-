import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity'; // importa tu entidad
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // o el motor que uses (mysql, sqlite, etc.)
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ezyrent',
      entities: [Category], // o usar: entities: [__dirname + '/**/*.entity{.ts,.js}']
      synchronize: true,
    }),
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
