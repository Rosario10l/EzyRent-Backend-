import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { BadRequestException } from '@nestjs/common';
@Injectable()
export class UsuarioService {
  async createUsuario(createUsuarioDto: CreateUsuarioDto) {
    const existingUser = await this._UsuarioRepository.findOne({
      where: { email: createUsuarioDto.email },
    });
    if (existingUser) {
      throw new BadRequestException('El correo ya está registrado');
    }
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, 10);
    const newUsuario = this._UsuarioRepository.create({
      ...createUsuarioDto,
      password: hashedPassword,
    });
    return this._UsuarioRepository.save(newUsuario);
  }
  async validateUser(email: string, password: string): Promise<Usuario | null> {
    const usuario = await this._UsuarioRepository.findOne({ where: { email } });
    if (usuario) {
      const isMatch: boolean = await bcrypt.compare(password, usuario.password);
      if (isMatch) {
        return usuario;
      }
    }
    return null;
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
