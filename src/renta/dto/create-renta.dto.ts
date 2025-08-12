import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive,} from 'class-validator';

export enum EstadoRenta {
  PENDIENTE = 'pendiente',
  ACEPTADA = 'aceptada',
  RECHAZADA = 'rechazada',
  DEVUELTA = 'devuelta', 
}

export class CreateRentaDto {
  @IsNotEmpty({ message: 'La fecha de inicio es obligatoria.' })
  @IsDateString({}, { message: 'La fecha de inicio debe ser una fecha válida.' })
  fecha_inicio: string;

  @IsNotEmpty({ message: 'La fecha de fin es obligatoria.' })
  @IsDateString({}, { message: 'La fecha de fin debe ser una fecha válida.' })
  fecha_fin: string;

  @IsNotEmpty({ message: 'La cantidad es obligatoria.' })
  @IsInt({ message: 'La cantidad debe ser un número entero.' })
  @IsPositive({ message: 'La cantidad debe ser un número positivo.' })
  camtidad: number;

  @IsOptional() 
  @IsEnum(EstadoRenta, { message: 'El estado debe ser un valor válido.' })
  estado?: EstadoRenta; 
  
  @IsNotEmpty({ message: 'El ID del artículo es obligatorio.' })
  @IsInt({ message: 'El ID del artículo debe ser un número entero.' })
  @IsPositive({ message: 'El ID del artículo debe ser un número positivo.' })
  articuloId: number;

  @IsNotEmpty({ message: 'El ID del usuario es obligatorio.' })
  @IsInt({ message: 'El ID del usuario debe ser un número entero.' })
 @IsPositive({ message: 'El ID del usuario debe ser un número positivo.' })
   usuarioId: number;
}
