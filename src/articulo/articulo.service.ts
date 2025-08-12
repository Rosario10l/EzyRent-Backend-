import { Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articulo } from './entities/articulo.entity';

@Injectable()
export class ArticuloService {
  constructor(
    @InjectRepository(Articulo)
    private _ArticuloRepo:Repository<Articulo>
  ){}
  
  
  async createarticulo(createDto: CreateArticuloDto) {
    try{
      const newArticulo=this._ArticuloRepo.create(createDto);
      await this._ArticuloRepo.save(newArticulo)
      return newArticulo
    }catch(error){
      console.error('error al crear articulo:', error)
      throw new InternalServerErrorException('no se pudo crear el articulo');
    }
  }

  async findAll() {
    try{
      return await this._ArticuloRepo.find()
    }catch(error){
      console.error('Error al bsuacr los articulos:',error)
      throw new NotFoundException(`Articulos no encontrados`)
    }
  }

  async findArticulo(id: number) {
try{
    const articulo=await this._ArticuloRepo.findOneBy({id});
    return articulo;
    }catch(error){
      console.error('Error al buscar el articulo:', error); 
      throw new NotFoundException(`Articulo con el id: ${id} no encontrado`)
    }  }


  async updateArticulo(id: number, updateArticuloDto: UpdateArticuloDto) {
try{
    const articulo = await this._ArticuloRepo.findOneBy({ id });
  if(!articulo){
      throw new NotFoundException(`mensaje`);
    }
    const updateArticulo = this._ArticuloRepo.merge(
      articulo,
      updateArticuloDto,
    );
    return await this._ArticuloRepo.save(updateArticulo);
  }catch(error){
    if (error instanceof NotFoundException) {
    throw error;
  }
   console.error(`Error al actualizar el articulo con id ${id}:, error`);
      throw new InternalServerErrorException(
        'No se pudo actualizar el articulo.',
  );
  }  
}


  async remove(id: number) {
    try {
      const articulo = await this._ArticuloRepo.findOneBy({ id });
      if (!articulo) {
        throw new NotFoundException(`El artículo con ID: ${id} no fue encontrado.`);
      }
      await this._ArticuloRepo.remove(articulo); 
      return { message: `El artículo con ID: ${id} se ha eliminado exitosamente.` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Ocurrió un error al eliminar el artículo con ID ${id}: ${error || error}`);
    }
  }

  
}