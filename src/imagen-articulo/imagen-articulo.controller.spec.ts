import { Test, TestingModule } from '@nestjs/testing';
import { ImagenArticuloController } from './imagen-articulo.controller';
import { ImagenArticuloService } from './imagen-articulo.service';

describe('ImagenArticuloController', () => {
  let controller: ImagenArticuloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenArticuloController],
      providers: [ImagenArticuloService],
    }).compile();

    controller = module.get<ImagenArticuloController>(ImagenArticuloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
