import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSolicitudRentadorDto {
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  telefono: string;

  identifacion_url?: string;
}
