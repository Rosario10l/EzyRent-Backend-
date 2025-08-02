import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';
export class CreateCalificacionDto {

  @IsInt()
  rentador_id: number;

  @IsInt()
  usuario_id: number;

  @IsInt()
  renta_id: number;

  @IsInt()
  @Min(1)
  @Max(5)
  Calificacion: number;

  @IsOptional()
  @IsString()
  comentario?: string;
}