import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PrincipalGuard } from 'src/principal/principal.guard';
import { CustomersService } from './customers.service';

@Controller('customers')
@UseGuards(PrincipalGuard)
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }
}
