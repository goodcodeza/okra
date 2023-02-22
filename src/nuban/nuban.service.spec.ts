import { Test, TestingModule } from '@nestjs/testing';
import { NubanService } from './nuban.service';

describe('NubanService', () => {
  let service: NubanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NubanService],
    }).compile();

    service = module.get<NubanService>(NubanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
