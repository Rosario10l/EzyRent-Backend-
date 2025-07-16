import { IsNotEmpty, isNumber, IsNumber, IsOptional, IsString , Length, Max} from "class-validator";

export class CreateArticuloDto {
    @Length(5,30)
    @IsString()
    @IsNotEmpty()
    nombre:string

    @Length(5,40)
    @IsString()
    @IsNotEmpty()
    description:string

    @IsNumber()
    @IsNotEmpty()
    precio:number

    @IsNumber()
    @IsNotEmpty()
    cantidad_total:number

    @IsNumber()
    @IsNotEmpty()
    cantidad_disponible:number

    @IsString()
    @IsNotEmpty()
    imagen_url:string

}
