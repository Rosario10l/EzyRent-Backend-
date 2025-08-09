import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Articulo } from './articulo/entities/articulo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Articulo)
    private articuloRepository: Repository<Articulo>
  ){}

  async findAll(): Promise<Articulo[]> {
    return this.articuloRepository.find();
  }

   async findByOwner(ownerId: string): Promise<Articulo[]> {
    return this.articuloRepository.find({ 
      where: { rentador: { id: parseInt(ownerId) } },
      relations: ['rentador', 'categoria']

    });
  }

  
  async create(productData: {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad_total: number;
    cantidad_disponible: number;
    activo: boolean;
    rentador: { id: number };
    categoria: { id: number };
    imagen_url?: string;
  }): Promise<Articulo> {
    const newProduct = this.articuloRepository.create(productData);
    return this.articuloRepository.save(newProduct);
  }


  async update(id: string, productData: {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    cantidad_total?: number;
    cantidad_disponible?: number;
    activo?: boolean;
    categoria?: { id: number };
    imagen_url?: string;
  }): Promise<Articulo> {
    const articuloId = parseInt(id, 10);
    if (isNaN(articuloId)) {
        throw new NotFoundException(`ID de artículo inválido: ${id}`); // O BadRequestException
    }
    const updateResult = await this.articuloRepository.update(articuloId, productData);
    if (updateResult.affected === 0) {
      throw new NotFoundException(`Artículo con ID ${id} no encontrado para actualizar.`);
    }
    const updatedArticulo = await this.articuloRepository.findOne({
      where: { id: articuloId },
      relations: ['rentador', 'categoria']
    });
    if (!updatedArticulo) {
      throw new NotFoundException(`Artículo con ID ${id} no encontrado después de la actualización.`);
    }
    return updatedArticulo;
  }

   async remove(id: string): Promise<void> {
    await this.articuloRepository.delete(id);
  }

}



 
  


    
