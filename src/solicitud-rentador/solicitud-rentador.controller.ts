import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SolicitudRentadorService } from './solicitud-rentador.service';
import { CreateSolicitudRentadorDto } from './dto/create-solicitud-rentador.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Controller('solicitud-rentador')
export class SolicitudRentadorController {
  constructor(private readonly service: SolicitudRentadorService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async crear(@Req() req: Request, @Body() dto: CreateSolicitudRentadorDto) {
    const user = req.user as Usuario;
    return this.service.crearSolicitud(user.id, dto);
  }

  @Get()
  async todas() {
    return this.service.obtenerTodas();
  }

  @Patch(':id/aprobar')
  async aprobar(@Param('id') id: number) {
    return this.service.aprobar(id);
  }

  @Patch(':id/rechazar')
  async rechazar(@Param('id') id: number) {
    return this.service.rechazar(id);
  }
}
