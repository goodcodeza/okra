import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityController } from './identity.controller';
import { AccountsService } from '../accounts/accounts.service';
import { NubanService } from '../nuban/nuban.service';
import { BVNService } from '../bvn/bvn.service';
import { PrismaService } from '../prisma.service';
import { CustomersService } from '../customers/customers.service';

@Module({
  controllers: [IdentityController],
  providers: [
    IdentityService,
    AccountsService,
    BVNService,
    CustomersService,
    NubanService,
    PrismaService,
  ],
})
export class IdentityModule {}
