import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSolicitudRentadorDto } from './dto/create-solicitud-rentador.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { SolicitudRentador } from './entities/solicitud-rentador.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class SolicitudRentadorService {
  constructor(
    @InjectRepository(SolicitudRentador)
    private solicitudRepo: Repository<SolicitudRentador>,

    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
  ) {}
  async crearSolicitud(usuarioId: number, dto: CreateSolicitudRentadorDto) {
    const usuario = await this.usuarioRepo.findOneBy({ id: usuarioId });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    const yaExiste = await this.solicitudRepo.findOne({
      where: { usuario: { id: usuarioId }, estado: 'pendiente' },
    });
    if (yaExiste) {
      throw new NotFoundException('Ya existe una solicitud pendiente');
    }
    const solicitud = this.solicitudRepo.create({
      ...dto,
      usuario,
      estado: 'pendiente',
      fecha_creacion: new Date(),
    });
    return await this.solicitudRepo.save(solicitud);
  }

  async obtenerTodas(): Promise<SolicitudRentador[]> {
    return this.solicitudRepo.find({
      relations: ['usuario'],
      order: { fecha_creacion: 'DESC' },
    });
  }

  async aprobar(id: number) {
    const solictud = await this.solicitudRepo.findOne({
      where: { id },
      relations: ['usuario'],
    });
    if (!solictud) throw new NotFoundException('Solicitud no encontrada');
    if (solictud.estado !== 'pendiente') {
      throw new NotFoundException('Esta solicitud ya fue aprobada o rechazada');
    }
    solictud.estado = 'aprobada';
    solictud.usuario.es_rentador = true;

    await this.usuarioRepo.save(solictud.usuario);
    return await this.solicitudRepo.save(solictud);
  }

  async rechazar(id: number) {
    const solicitud = await this.solicitudRepo.findOneBy({ id });
    if (!solicitud) throw new NotFoundException('Solicitud no encontrada');
    if (solicitud.estado !== 'pendiente') {
      throw new BadRequestException('Esta solicitud ya fue procesada');
    }

    solicitud.estado = 'rechazada';
    return await this.solicitudRepo.save(solicitud);
  }
}
