import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudRentadorController } from './solicitud-rentador.controller';
import { SolicitudRentadorService } from './solicitud-rentador.service';

describe('SolicitudRentadorController', () => {
  let controller: SolicitudRentadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudRentadorController],
      providers: [SolicitudRentadorService],
    }).compile();

    controller = module.get<SolicitudRentadorController>(
      SolicitudRentadorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
