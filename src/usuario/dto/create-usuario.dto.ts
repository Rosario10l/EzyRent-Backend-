import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;
  @IsNotEmpty()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
