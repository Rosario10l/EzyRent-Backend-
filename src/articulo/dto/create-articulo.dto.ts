import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreateArticuloDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNumber()
  @IsNotEmpty()
  cantidad_total: number;

  @IsNumber()
  @IsNotEmpty()
  cantidad_disponible: number;

  @IsUrl()
  @IsOptional()
  imagen_url?: string;

  @IsNumber()
  @IsNotEmpty()
  rentador_id: number;

  @IsNumber()
  @IsNotEmpty()
  categoria_id: number;
}
