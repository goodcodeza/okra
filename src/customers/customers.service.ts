import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }
}
