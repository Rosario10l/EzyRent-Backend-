import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Renta } from './entities/renta.entity';
import { Articulo } from '../articulo/entities/articulo.entity'; 
import { CreateRentaDto } from './dto/create-renta.dto';
import { UpdateRentaDto } from './dto/update-renta.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class RentaService {
  constructor(
    @InjectRepository(Renta)
    private readonly _rentaRepository: Repository<Renta>,
    @InjectRepository(Articulo)
    private readonly articuloRepository: Repository<Articulo>,
    @InjectRepository(Usuario)
    private readonly usuarioRepositori: Repository<Usuario>
  ) {}

  async createrenta(createRentaDto: CreateRentaDto): Promise<Renta> {
    const { articuloId, usuarioId, cantidad, ...restOfDto } = createRentaDto;
    const articulo = await this.articuloRepository.findOneBy({ id: articuloId });
    
    if (!articulo) {
      throw new NotFoundException(`El artículo con ID ${articuloId} no fue encontrado.`);
    }

    const usuario = await this.usuarioRepositori.findOneBy({ id: usuarioId });
    if (!usuario) {
      throw new NotFoundException(`El usuario con ID ${usuarioId} no fue encontrado.`);
    }

    if (articulo.cantidad_disponible < cantidad) {
      throw new BadRequestException(`No hay suficiente stock. Cantidad disponible: ${articulo.cantidad_disponible}`);
    }

    const nuevaRenta = this._rentaRepository.create(restOfDto);
    nuevaRenta.articulo = articulo;
    nuevaRenta.usuario = usuario; 
    nuevaRenta.cantidad = cantidad;

    const rentaGuardada: Renta = await this._rentaRepository.save(nuevaRenta);

    try {
      articulo.cantidad_disponible -= cantidad;
      await this.articuloRepository.save(articulo);
    } catch (error) {
      console.error('Error al actualizar el stock del artículo:', error);
      throw new BadRequestException('Error al procesar la renta. Intenta de nuevo.');
    }
    
    // CAMBIO AQUÍ: Se agrega 'usuario' a las relaciones para que se incluya en la respuesta
    const rentaConRelaciones = await this._rentaRepository.findOne({
      where: { id: rentaGuardada.id },
      relations: ['articulo', 'usuario'] 
    });
    
    if (!rentaConRelaciones) {
      throw new NotFoundException(`Renta con ID #${rentaGuardada.id} no encontrada después de la creación.`);
    }

    return rentaConRelaciones;
  }



  async findAll(): Promise<Renta[]> {
    return this._rentaRepository.find();
  }

  async findOne(id: number): Promise<Renta> {
    const renta = await this._rentaRepository.findOne({ where: { id } });
    if (!renta) {
      throw new NotFoundException(`Renta con ID #${id} no encontrada.`);
    }
    return renta;
  }

  async update(id: number, updateRentaDto: UpdateRentaDto): Promise<Renta> {
    const rentaExistente = await this.findOne(id);
    this._rentaRepository.merge(rentaExistente, updateRentaDto);
    return this._rentaRepository.save(rentaExistente);
  }

  async remove(id: number): Promise<void> {
    const rentaExistente = await this.findOne(id);
    await this._rentaRepository.delete(rentaExistente.id);
  }
}
