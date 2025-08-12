import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateSolicitudRentadorDto {
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsString()
  identificacion_url?: string;
}
