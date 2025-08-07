import { Calificacion } from './../../calificacion/entities/calificacion.entity';
import { Articulo } from 'src/articulo/entities/articulo.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, ManyToOne, OneToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { JoinColumn } from 'typeorm';
import { Column } from 'typeorm';

@Entity('rentas')

export class Renta {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(()=> Articulo, (a)=>a.rentas)
  @JoinColumn({name:'articulo_id'})
  articulo: Articulo;


  @ManyToOne(() => Usuario, (u) => u.rentas)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  fecha_inicio: Date;
  @Column()
  fecha_fin: Date;
  @Column()
  cantidad: number;
  @Column({
    type: 'enum',
    enum: ['pendiente', 'aceptada', 'rechazada', 'devuelte'],
    default: 'pendiente',
  })
  estado: string;

  @OneToOne(() => Calificacion, (c) => c.renta)
  Calificacion: Calificacion;
}
