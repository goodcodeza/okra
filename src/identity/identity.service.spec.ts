import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from '../accounts/accounts.service';
import { BVNService } from '../bvn/bvn.service';
import { CustomersService } from '../customers/customers.service';
import { NubanService } from '../nuban/nuban.service';
import { PrismaService } from '../prisma.service';
import { IdentityService } from './identity.service';

describe('IdentityService', () => {
  let service: IdentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IdentityService,
        AccountsService,
        BVNService,
        CustomersService,
        NubanService,
        PrismaService,
      ],
    }).compile();

    service = module.get<IdentityService>(IdentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
