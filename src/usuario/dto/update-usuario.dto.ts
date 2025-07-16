import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsOptional()
  @IsString()
  nombre: string;
  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;
  @IsOptional()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
