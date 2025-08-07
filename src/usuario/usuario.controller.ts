import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createUsuario(createUsuarioDto);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const usuario = await this.usuarioService.validateUser(
      body.email,
      body.password,
    );

    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      email: usuario.email,
      sub: usuario.id,
      rol: usuario.rol,
    };

    const token: string = this.jwtService.sign(payload);

    return {
      access_token: token,
      user: {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
    };
  }
  @Get()
  findAll() {
    return this.usuarioService.findAllUsuario();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOneUsuario(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.updateUsuario(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.removeUsuario(+id);
  }
}
