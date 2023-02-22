import { Injectable } from '@nestjs/common';
import { Customer, Prisma } from '@prisma/client';
import { format, parse } from 'date-fns';
import { AccountsService } from 'src/accounts/accounts.service';
import { BVNService } from 'src/bvn/bvn.service';
import { BVN } from 'src/bvn/entities/bvn.entity';
import { CustomersService } from 'src/customers/customers.service';
import { NubanService } from 'src/nuban/nuban.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IdentityService {
  constructor(
    private readonly accountsService: AccountsService,
    private readonly bvnService: BVNService,
    private readonly customersService: CustomersService,
    private readonly nubanService: NubanService,
    private readonly prismaService: PrismaService,
  ) {}

  async process(bvn: string) {
    const identity = await this.prismaService.identity.findUnique({
      where: { bvn },
    });
    if (identity) {
      return identity;
    }

    const confirmation = await this.fetch_bvn_confirmation(bvn);
    if (!confirmation) {
      return null;
    }

    const customer = await this.customersService.findOneByBVN(bvn);
    if (!customer) {
      console.error(
        `could not find a customer that is associated with the bvn ${bvn}`,
      );

      return null;
    }

    const data = this.buildIdentity(customer, confirmation);
    return this.prismaService.identity.create({ data });
  }

  private async fetch_bvn_confirmation(bvn: string) {
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
    if (!bvn_confirmation) {
      console.error(`could not confirm bvn ${bvn}`);

      return null;
    }

    return bvn_confirmation;
  }

  private buildIdentity(
    customer: Customer,
    bvn: BVN,
  ): Prisma.IdentityCreateInput {
    return {
      account_level: bvn.AccountLevel,
      address: bvn.Address,
      aliases: [],
      bvn: bvn.Bvn,
      customer: { connect: { id: customer.id } },
      dob: bvn.DateOfBirth,
      emails: [bvn.Email],
      enrollment_bank_code: bvn.EnnrollmentBbank,
      enrollment_registration_date: bvn.RegistrationDate,
      enrollment_bank: bvn.Enrollment_Bank,
      enrollment_date: bvn.Enrollment_Date,
      firstname: bvn.FirstName,
      fullname: bvn.FullName,
      gender: bvn.Gender,
      lastname: bvn.LastName,
      lga_origin: bvn.LGAOrigin,
      lga_residence: bvn.LGAOfResidence,
      marital_status: bvn.MaritalStatus,
      middlename: bvn.MiddleName,
      nationality: bvn.nationality,
      nin: bvn.Nin,
      on_washlist: bvn.Washlist,
      phones: [bvn.Phone],
      photo_id: bvn.PhotoId,
      state_origin: bvn.State_of_origin,
      state_residence: bvn.State_of_residence,
      verification_country: bvn.VerificationCountry,
    };
  }
}
