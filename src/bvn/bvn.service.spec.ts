import { Test, TestingModule } from '@nestjs/testing';
import { BVNService } from './bvn.service';

describe('BVNService', () => {
  let service: BVNService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BVNService],
    }).compile();

    service = module.get<BVNService>(BVNService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
