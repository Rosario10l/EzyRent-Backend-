import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudRentadorService } from './solicitud-rentador.service';
import { CreateSolicitudRentadorDto } from './dto/create-solicitud-rentador.dto';
import { UpdateSolicitudRentadorDto } from './dto/update-solicitud-rentador.dto';

@Controller('solicitud-rentador')
export class SolicitudRentadorController {
  constructor(private readonly solicitudRentadorService: SolicitudRentadorService) {}

  @Post()
  create(@Body() createSolicitudRentadorDto: CreateSolicitudRentadorDto) {
    return this.solicitudRentadorService.create(createSolicitudRentadorDto);
  }

  @Get()
  findAll() {
    return this.solicitudRentadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudRentadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitudRentadorDto: UpdateSolicitudRentadorDto) {
    return this.solicitudRentadorService.update(+id, updateSolicitudRentadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudRentadorService.remove(+id);
  }
}
