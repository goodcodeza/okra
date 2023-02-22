import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityController } from './identity.controller';
import { AccountsService } from 'src/accounts/accounts.service';
import { NubanService } from 'src/nuban/nuban.service';
import { BVNService } from 'src/bvn/bvn.service';

@Module({
  controllers: [IdentityController],
  providers: [IdentityService, AccountsService, BVNService, NubanService],
})
export class IdentityModule {}
