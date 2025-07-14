import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Articulo } from 'src/articulo/entities/articulo.entity';
@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column('text')
  descripcion: string;

  @OneToMany(() => Articulo, (a) => a.categoria)
  articulos: Articulo[];
}
