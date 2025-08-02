import { Test, TestingModule } from '@nestjs/testing';
import { CalificacionClienteService } from './calificacion-cliente.service';

describe('CalificacionClienteService', () => {
  let service: CalificacionClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalificacionClienteService],
    }).compile();

    service = module.get<CalificacionClienteService>(CalificacionClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
