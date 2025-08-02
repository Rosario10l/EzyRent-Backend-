import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenArticuloDto } from './create-imagen-articulo.dto';

export class UpdateImagenArticuloDto extends PartialType(CreateImagenArticuloDto) {}
