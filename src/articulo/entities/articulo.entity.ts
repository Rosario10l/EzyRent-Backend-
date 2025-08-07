import { Renta } from 'src/renta/entities/renta.entity';
import { ImagenArticulo } from 'src/imagen-articulo/entities/imagen-articulo.entity';
import { JoinColumn } from 'typeorm';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
@Entity('articulos')
export class Articulo {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Usuario, (u) => u.articulos)
  @JoinColumn({ name: 'rentador_id' })
  rentador: Usuario;

  @ManyToOne(() => Categoria, (c) => c.articulos)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @Column()
  nombre: string;
  @Column('text')
  descripcion: string;
  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;
  @Column()
  cantidad_total: number;
  @Column()
  cantidad_disponible: number;
  @Column({ nullable: true })
  imagen_url: string;
  @Column({ default: true })
  activo: boolean;
  @CreateDateColumn()
  fecha_publicacion: Date;
  @OneToMany(() => ImagenArticulo, (img) => img.articulo)
  imagenes: ImagenArticulo[];
  
  @OneToMany(() => Renta, (r) => r.articulo)
  rentas: Renta[];
}
