import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudRentadorService } from './solicitud-rentador.service';

describe('SolicitudRentadorService', () => {
  let service: SolicitudRentadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudRentadorService],
    }).compile();

    service = module.get<SolicitudRentadorService>(SolicitudRentadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
