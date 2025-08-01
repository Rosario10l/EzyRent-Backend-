import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articulo } from './entities/articulo.entity';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Injectable()
export class ArticuloService {
  constructor(
    @InjectRepository(Articulo)
    private readonly articuloRepository: Repository<Articulo>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createArticuloDto: CreateArticuloDto) {
    const { rentador_id, categoria_id, ...restoDatos } = createArticuloDto;

    const rentador = await this.usuarioRepository.findOneBy({ id: rentador_id });
    if (!rentador) throw new NotFoundException('Rentador no encontrado');

    const categoria = await this.categoriaRepository.findOneBy({ id: categoria_id });
    if (!categoria) throw new NotFoundException('Categoría no encontrada');

    const articulo = this.articuloRepository.create({
      ...restoDatos,
      rentador,
      categoria,
    });

    return this.articuloRepository.save(articulo);
  }

  findAll() {
    return this.articuloRepository.find({
      relations: ['categoria', 'rentador'],
    });
  }

  async findOne(id: number) {
    const articulo = await this.articuloRepository.findOne({
      where: { id },
      relations: ['categoria', 'rentador'],
    });
    if (!articulo) throw new NotFoundException('Artículo no encontrado');
    return articulo;
  }

  async update(id: number, dto: UpdateArticuloDto) {
    const articulo = await this.articuloRepository.findOneBy({ id });
    if (!articulo) throw new NotFoundException('Artículo no encontrado');
    const actualizado = this.articuloRepository.merge(articulo, dto);
    return this.articuloRepository.save(actualizado);
  }

  async remove(id: number) {
    const articulo = await this.articuloRepository.findOneBy({ id });
    if (!articulo) throw new NotFoundException('Artículo no encontrado');
    await this.articuloRepository.remove(articulo);
    return { mensaje: 'Artículo eliminado correctamente' };
  }
}
