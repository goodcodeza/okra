import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PrincipalGuard } from '../guards/principal/principal.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    if (!user) {
      throw new HttpException(
        'Hint - the email may have been used already.', // TODO - Think of a better message that does not leak information.
        HttpStatus.BAD_REQUEST,
      );
    }

    return user;
  }

  @Get()
  @UseGuards(PrincipalGuard) // TODO - Add a Role Guard so that only ADMIN to check permissions
  async findAll() {
    return this.usersService.findAll();
  }
}
