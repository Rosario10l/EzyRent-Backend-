import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
@Entity('solicitud_rentador')
export class SolicitudRentador {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (u) => u.solicitudes)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
  @Column('text')
  direccion: string;
  @Column()
  telefono: string;
  @Column({ nullable: true })
  identificacion_url: string;
  @Column({
    type: 'enum',
    enum: ['pendiente', 'aprobada', 'rechazada'],
    default: 'pendiente',
  })
  estado: 'pendiente' | 'aprobada' | 'rechazada';
  fecha_creacion: Date;
}
