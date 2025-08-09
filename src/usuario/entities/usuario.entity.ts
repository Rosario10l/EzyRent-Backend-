import { Articulo } from 'src/articulo/entities/articulo.entity';
import { Renta } from 'src/renta/entities/renta.entity';
import { SolicitudRentador } from 'src/solicitud-rentador/entities/solicitud-rentador.entity';
import { Entity, OneToMany } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm';
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ type: 'enum', enum: ['usuario', 'admin'], default: 'usuario' })
  rol: 'usuario' | 'admin';
  @Column({ type: 'tinyint', width: 1, default: 0 })
  es_rentador: boolean;
  @CreateDateColumn()
  fecha_creacion: Date;
  @OneToMany(() => SolicitudRentador, (s) => s.usuario)
  solicitudes: SolicitudRentador[];

  @OneToMany(() => Articulo, (a) => a.rentador)
  articulos: Articulo[];

  @OneToMany(() => Renta, (r) => r.usuario)
  rentas: Renta[];
}
