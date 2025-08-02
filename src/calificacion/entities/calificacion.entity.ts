import { Renta } from 'src/renta/entities/renta.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { CreateDateColumn, Entity, ManyToOne, OneToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { JoinColumn } from 'typeorm';
@Entity('calificaciones')
export class Calificacion {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'rentador_id' })
  rentador: Usuario;
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @OneToOne(() => Renta)
  @JoinColumn({ name: 'renta_id' })
  renta: Renta;
  @Column()
  Calificacion: number;
  @Column('text', { nullable: true })
  comentario: string;
  @CreateDateColumn()
  fecha: Date;
}
