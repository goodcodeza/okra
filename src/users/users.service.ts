import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      email: createUserDto.email.toLowerCase().trim(),
      firstName: createUserDto.firstName.trim(),
      lastName: createUserDto.lastName.trim(),
      password: createUserDto.password,
    };

    try {
      const user = await this.prismaService.user.create({ data });

      return this.toSafeUser(user);
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  async findAll() {
    const users = await this.prismaService.user.findMany();
    return users.map(this.toSafeUser);
  }

  async findOne(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // TODO - DO NO STORE PASSWORDS IN PLAIN TEXT - USE A SHA 256 HASH
    if (user && user.password === password) {
      return this.toSafeUser(user);
    }

    return null;
  }

  private toSafeUser(user: User) {
    return {
      email: user.email,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
    };
  }
}
