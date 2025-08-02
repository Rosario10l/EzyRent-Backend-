import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagenArticuloService } from './imagen-articulo.service';
import { CreateImagenArticuloDto } from './dto/create-imagen-articulo.dto';
import { UpdateImagenArticuloDto } from './dto/update-imagen-articulo.dto';

@Controller('imagen-articulo')
export class ImagenArticuloController {
  constructor(private readonly imagenArticuloService: ImagenArticuloService) {}

  @Post()
  create(@Body() createImagenArticuloDto: CreateImagenArticuloDto) {
    return this.imagenArticuloService.create(createImagenArticuloDto);
  }

  @Get()
  findAll() {
    return this.imagenArticuloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagenArticuloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagenArticuloDto: UpdateImagenArticuloDto) {
    return this.imagenArticuloService.update(+id, updateImagenArticuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagenArticuloService.remove(+id);
  }
}
