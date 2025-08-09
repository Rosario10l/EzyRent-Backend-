import { IsNumber, IsOptional, IsString , Length, Max} from "class-validator";


export class UpdateRentaDto {
    @IsNumber()
    @IsOptional()
    cantidad:number
        
}
