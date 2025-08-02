import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Calificacion } from './entities/calificacion.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Renta } from 'src/renta/entities/renta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalificacionService {
constructor(
    @InjectRepository(Calificacion)
    private readonly calificacionRepo: Repository<Calificacion>,

    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,

    @InjectRepository(Renta)
    private readonly rentaRepo: Repository<Renta>,
  ) {}

  async create(dto: CreateCalificacionDto): Promise<Calificacion> {
  const calificacion = this.calificacionRepo.create({
    Calificacion: dto.Calificacion,
    comentario: dto.comentario,
    rentador: { id: dto.rentador_id },
    usuario: { id: dto.usuario_id },
    renta: { id: dto.renta_id },
  });

  return this.calificacionRepo.save(calificacion);
}

 findAll(): Promise<Calificacion[]> {
    return this.calificacionRepo.find({
      relations: ['usuario', 'rentador', 'renta'],
    });
  }


  
findOne(id: number): Promise<Calificacion | null> {
  return this.calificacionRepo.findOne({
    where: { id },
    relations: ['usuario', 'rentador', 'renta'],
  });
}

 async update(id: number, dto: UpdateCalificacionDto): Promise<Calificacion> {
  const calificacion = await this.calificacionRepo.findOneBy({ id });
  if (!calificacion) {
    throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
  }

  // actualiza los campos permitidos
  calificacion.Calificacion = dto.Calificacion ?? calificacion.Calificacion;
  calificacion.comentario = dto.comentario ?? calificacion.comentario;

  return this.calificacionRepo.save(calificacion);
}

async remove(id: number): Promise<void> {
  const result = await this.calificacionRepo.delete(id);
  if (result.affected === 0) {
    throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
  }
}
}