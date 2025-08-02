import { Injectable } from '@nestjs/common';
import { CreateCalificacionClienteDto } from './dto/create-calificacion-cliente.dto';
import { UpdateCalificacionClienteDto } from './dto/update-calificacion-cliente.dto';

@Injectable()
export class CalificacionClienteService {
  create(createCalificacionClienteDto: CreateCalificacionClienteDto) {
    return 'This action adds a new calificacionCliente';
  }

  findAll() {
    return `This action returns all calificacionCliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calificacionCliente`;
  }

  update(id: number, updateCalificacionClienteDto: UpdateCalificacionClienteDto) {
    return `This action updates a #${id} calificacionCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} calificacionCliente`;
  }
}
