import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: string, createCustomerDto: CreateCustomerDto) {
    const data: Prisma.CustomerCreateInput = {
      bvn: createCustomerDto.bvn,
      User: {
        connect: {
          id: userId,
        },
      },
    };

    const customer = this.prismaService.customer.create({ data });

    return customer;
  }

  async findAll(userId: string) {
    return this.prismaService.customer.findMany({ where: { userId } });
  }

  async findOne(userId: string, id: string) {
    const customer = await this.prismaService.customer.findUnique({
      where: { id },
    });
    if (customer?.userId !== userId) {
      return null;
    }

    return customer;
  }

  async findOneByBVN(bvn: string) {
    const customer = await this.prismaService.customer.findUnique({
      where: { bvn },
    });

    return customer;
  }
}
