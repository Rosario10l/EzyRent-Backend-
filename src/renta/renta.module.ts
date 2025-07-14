import { Module } from '@nestjs/common';
import { RentaService } from './renta.service';
import { RentaController } from './renta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Renta } from './entities/renta.entity';

@Module({
  controllers: [RentaController],
  imports: [TypeOrmModule.forFeature([Renta])],
  providers: [RentaService],
})
export class RentaModule {}
