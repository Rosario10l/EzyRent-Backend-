import { Injectable } from '@nestjs/common';
import { CreateImagenArticuloDto } from './dto/create-imagen-articulo.dto';
import { UpdateImagenArticuloDto } from './dto/update-imagen-articulo.dto';

@Injectable()
export class ImagenArticuloService {
  create(createImagenArticuloDto: CreateImagenArticuloDto) {
    return 'This action adds a new imagenArticulo';
  }

  findAll() {
    return `This action returns all imagenArticulo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagenArticulo`;
  }

  update(id: number, updateImagenArticuloDto: UpdateImagenArticuloDto) {
    return `This action updates a #${id} imagenArticulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagenArticulo`;
  }
}
