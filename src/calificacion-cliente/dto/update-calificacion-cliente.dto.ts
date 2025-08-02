import { PartialType } from '@nestjs/mapped-types';
import { CreateCalificacionClienteDto } from './create-calificacion-cliente.dto';

export class UpdateCalificacionClienteDto extends PartialType(CreateCalificacionClienteDto) {}
