import { Test, TestingModule } from '@nestjs/testing';
import { CalificacionClienteController } from './calificacion-cliente.controller';
import { CalificacionClienteService } from './calificacion-cliente.service';

describe('CalificacionClienteController', () => {
  let controller: CalificacionClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalificacionClienteController],
      providers: [CalificacionClienteService],
    }).compile();

    controller = module.get<CalificacionClienteController>(CalificacionClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
