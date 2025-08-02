import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Articulo } from 'src/articulo/entities/articulo.entity';
@Entity('imagenes_articulo')
export class ImagenArticulo {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Articulo, (a) => a.imagenes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'articulo_id' })
  articulo: Articulo;
  @Column('text')
  url: string;
}
