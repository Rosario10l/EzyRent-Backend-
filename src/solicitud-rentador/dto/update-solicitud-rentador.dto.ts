import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudRentadorDto } from './create-solicitud-rentador.dto';

export class UpdateSolicitudRentadorDto extends PartialType(CreateSolicitudRentadorDto) {}
