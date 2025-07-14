import { Renta } from 'src/renta/entities/renta.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
@Entity('calificaciones_clientes')
export class CalificacionCliente {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Usuario;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'rentador_id' })
  rentador: Usuario;

  @ManyToOne(() => Renta)
  @JoinColumn({ name: 'renta_id' })
  renta: Renta;

  @Column()
  calificacion: number;

  @Column('text', { nullable: true })
  comentario: string;

  @CreateDateColumn()
  fecha: Date;
}
