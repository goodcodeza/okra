import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PrincipalGuard } from 'src/guards/principal/principal.guard';
import { ProcessIdentityDto } from './dto/process-identity.dto';
import { IdentityService } from './identity.service';

@Controller('identity')
@UseGuards(PrincipalGuard)
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post('/process')
  async process(@Body() processIdentityDto: ProcessIdentityDto) {
    const identity = await this.identityService.process(processIdentityDto.bvn);
    if (!identity) {
      throw new HttpException(
        'Hint - the bvn may not be associated to a customer.', // TODO - Think of a better message that does not leak information.
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      firstname: identity.firstname,
      middlename: identity.middlename,
      lastname: identity.lastname,
      aliases: identity.aliases,
      dob: identity.dob,
      address: identity.address,
      gender: identity.gender,
      photo_id: identity.photo_id,
      enrollment_date: identity.enrollment_date,
      enrollment_bank: identity.enrollment_bank,
      phones: identity.phones,
      emails: identity.emails,
      fullname: identity.fullname,
      bvn: identity.bvn,
      customer: identity.customerId,
      identity: identity.id,
      nin: identity.nin,
      lga_origin: identity.lga_origin,
      lga_residence: identity.lga_residence,
      nationality: identity.nationality,
      state_residence: identity.state_residence,
      state_origin: identity.state_origin,
      enrollment: {
        bank: identity.enrollment_bank_code,
        registration_date: identity.enrollment_registration_date,
      },
      on_washlist: identity.on_washlist,
      marital_status: identity.marital_status,
      account_level: identity.account_level,
      verification_country: identity.verification_country,
    };
  }
}
