import { IsNotEmpty, IsNumber, IsString, Length, Min } from "class-validator";

export class CreateArticuloDto {
    @Length(5,30)
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @Length(5,40)
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0, { message: 'El precio debe ser un número positivo.' })
    precio: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0, { message: 'La cantidad total debe ser un número positivo.' }) 
    cantidad_total: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0, { message: 'La cantidad disponible debe ser un número positivo.' })
    cantidad_disponible: number;

    @IsString()
    @IsNotEmpty()
    imagen_url: string;
}