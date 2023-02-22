import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PrincipalGuard } from 'src/guards/principal/principal.guard';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
@UseGuards(PrincipalGuard)
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(
    @Request() req: any,
    @Body() createCustomerDto: CreateCustomerDto,
  ) {
    const userId: string = req.user.userId;

    return this.customersService.create(userId, createCustomerDto);
  }

  @Get()
  async findAll(@Request() req: any) {
    const userId: string = req.user.userId;

    return this.customersService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Request() req: any, @Param('id') id: string) {
    const userId: string = req.user.userId;

    const customer = await this.customersService.findOne(userId, id);
    if (!customer) {
      throw new HttpException(
        'Hint - the customer may be associated to a different user.', // TODO - Think of a better message that does not leak information.
        HttpStatus.NOT_FOUND,
      );
    }

    return customer;
  }
}
