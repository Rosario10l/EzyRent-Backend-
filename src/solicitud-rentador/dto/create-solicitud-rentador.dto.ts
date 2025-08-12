import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSolicitudRentadorDto {
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  telefono: string;

  @IsUrl()
  identificacion_url: string;
}
