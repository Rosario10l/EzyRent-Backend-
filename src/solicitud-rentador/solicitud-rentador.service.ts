import { Injectable } from '@nestjs/common';
import { CreateSolicitudRentadorDto } from './dto/create-solicitud-rentador.dto';
import { UpdateSolicitudRentadorDto } from './dto/update-solicitud-rentador.dto';

@Injectable()
export class SolicitudRentadorService {
  create(createSolicitudRentadorDto: CreateSolicitudRentadorDto) {
    return 'This action adds a new solicitudRentador';
  }

  findAll() {
    return `This action returns all solicitudRentador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitudRentador`;
  }

  update(id: number, updateSolicitudRentadorDto: UpdateSolicitudRentadorDto) {
    return `This action updates a #${id} solicitudRentador`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitudRentador`;
  }
}
