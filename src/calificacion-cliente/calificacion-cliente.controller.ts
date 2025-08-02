import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalificacionClienteService } from './calificacion-cliente.service';
import { CreateCalificacionClienteDto } from './dto/create-calificacion-cliente.dto';
import { UpdateCalificacionClienteDto } from './dto/update-calificacion-cliente.dto';

@Controller('calificacion-cliente')
export class CalificacionClienteController {
  constructor(private readonly calificacionClienteService: CalificacionClienteService) {}

  @Post()
  create(@Body() createCalificacionClienteDto: CreateCalificacionClienteDto) {
    return this.calificacionClienteService.create(createCalificacionClienteDto);
  }

  @Get()
  findAll() {
    return this.calificacionClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calificacionClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalificacionClienteDto: UpdateCalificacionClienteDto) {
    return this.calificacionClienteService.update(+id, updateCalificacionClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calificacionClienteService.remove(+id);
  }
}
