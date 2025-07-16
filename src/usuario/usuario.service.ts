import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  async createUsuario(createUsuarioDto: CreateUsuarioDto) {
    const newUsuario = this._UsuarioRepository.create(createUsuarioDto);
    await this._UsuarioRepository.save(newUsuario);
    return newUsuario;
  }

  async findAllUsuario() {
    return await this._UsuarioRepository.find({
      relations: ['solicitudes', 'articulos', 'rentas'],
    });
  }

  async findOneUsuario(id: number) {
    try {
      const usuario = await this._UsuarioRepository.findOneBy({ id });
      if (!usuario) {
        throw new Error(`El Usuario con el id ${id} no existe`);
      }
      return usuario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
    }
  }
  async updateUsuario(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this._UsuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`El Usuario con el id ${id} no existe`);
    }
    const updateUsuario = this._UsuarioRepository.merge(
      usuario,
      updateUsuarioDto,
    );
    return await this._UsuarioRepository.save(updateUsuario);
  }

  async removeUsuario(id: number) {
    try {
      const usuario = await this._UsuarioRepository.findOneBy({ id });
      if (!usuario) {
        throw new NotFoundException(`El Usuario con el id ${id} no existe`);
      }
      await this._UsuarioRepository.remove(usuario);
      return { message: 'Usuario eliminado correctamente' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Error al eliminar el Usuario con el id ${id}`);
    }
  }
  constructor(
    @InjectRepository(Usuario)
    private readonly _UsuarioRepository: Repository<Usuario>,
  ) {}
}
