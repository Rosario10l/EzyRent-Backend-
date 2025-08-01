import { IsNumber, IsOptional, IsString , Length, Max} from "class-validator";

export class UpdateArticuloDto{
    @Length(5,30)
    @IsString()
    @IsOptional()
    nombre:string
    
    @Length(5,40)
    @IsString()
    @IsOptional()
    description:string
    
    @IsNumber()
    @IsOptional()
    precio:number
    
    @IsNumber()
    @IsOptional()
    cantidad_total:number
    
    @IsNumber()
    @IsOptional()
    cantidad_disponible:number
    
    @IsString()
    @IsOptional()
    imagen_url:string
    
}
