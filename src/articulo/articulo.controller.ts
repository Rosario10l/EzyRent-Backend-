import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticuloService } from './articulo.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';

@Controller('articulo')
export class ArticuloController {
  constructor(private readonly articuloService: ArticuloService) {}

  @Post()
  create(@Body() createArticuloDto: CreateArticuloDto) {
    return this.articuloService.createarticulo(createArticuloDto);
  }

  @Get()
  findAll() {
    return this.articuloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articuloService.findArticulo(+id);
  }

  // Endpoint para obtener productos por categoría
  @@Get('categoria/:categoriaId')
  async getArticulosPorCategoria(@Param('categoriaId') categoriaId: number) {
  return this.articuloService.getArticulosPorCategoria(categoriaId);
}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticuloDto: UpdateArticuloDto) {
    return this.articuloService.updateArticulo(+id, updateArticuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articuloService.remove(+id);
  }
}
