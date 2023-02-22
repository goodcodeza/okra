import { Injectable } from '@nestjs/common';
import { format, parse } from 'date-fns';
import { AccountsService } from 'src/accounts/accounts.service';
import { BVNService } from 'src/bvn/bvn.service';
import { NubanService } from 'src/nuban/nuban.service';

@Injectable()
export class IdentityService {
  constructor(
    private readonly accountsService: AccountsService,
    private readonly bvnService: BVNService,
    private readonly nubanService: NubanService,
  ) {}

  async process(bvn: string) {
    const accounts = await this.accountsService.findAll(bvn);
    if (!accounts?.length) {
      console.error(`no accounts found for bvn ${bvn}`);

      return null;
    }

    const account = accounts[0];
    const nuban_confirmation = await this.nubanService.confirm(
      account.bank,
      bvn,
      account.account_no,
    );

    if (!nuban_confirmation) {
      console.error(`could not confirm nuban for bvn ${bvn}`);

      return null;
    }

    const date_of_birth = format(
      parse(nuban_confirmation.birthdate, 'MMMM do, yyyy', new Date()),
      'yyyy-MM-dd',
    );
    const bvn_confirmation = await this.bvnService.confirm(bvn, date_of_birth);

    return bvn_confirmation;
  }
}
