import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsuarioController],
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioService],
})
export class UsuarioModule {}
