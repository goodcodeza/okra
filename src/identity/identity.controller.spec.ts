import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from '../accounts/accounts.service';
import { BVNService } from '../bvn/bvn.service';
import { CustomersService } from '../customers/customers.service';
import { NubanService } from '../nuban/nuban.service';
import { PrismaService } from '../prisma.service';
import { IdentityController } from './identity.controller';
import { IdentityService } from './identity.service';

describe('IdentityController', () => {
  let controller: IdentityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentityController],
      providers: [
        IdentityService,
        AccountsService,
        BVNService,
        CustomersService,
        NubanService,
        PrismaService,
      ],
    }).compile();

    controller = module.get<IdentityController>(IdentityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
