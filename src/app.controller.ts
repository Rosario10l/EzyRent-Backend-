import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { Articulo } from './articulo/entities/articulo.entity';
import { FileInterceptor } from '@nestjs/platform-express';



@Controller('api/products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getProducts(){
    return this.appService.findAll();
  }

  @Get('owner/:ownerId')
  async getProductsByOwner(@Param('ownerId') ownerId: string){
    return this.appService.findByOwner(ownerId);
  }

  @Post()
  async createProduct(@Body() productData: {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad_total: number;
    cantidad_disponible: number;
    activo: boolean;
    rentador: { id: number };
    categoria: { id: number };
    imagen_url?: string;
  }) {
    return this.appService.create(productData);
  }


  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productData: {
      nombre?: string;
      descripcion?: string;
      precio?: number;
      cantidad_total?: number;
      cantidad_disponible?: number;
      activo?: boolean;
      categoria?: { id: number };
      imagen_url?: string;
    }
  ) {
    return this.appService.update(id, productData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.appService.remove(id);
  }

}
