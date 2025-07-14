import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reseña {
@PrimaryGeneratedColumn()
  id: number;
@Column()
  comentario: string;
@Column()
calificacion: number;
 @CreateDateColumn()
fecha: Date;
}
