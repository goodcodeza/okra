import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PrincipalGuard } from 'src/guards/principal/principal.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(PrincipalGuard) // TODO - Add a Role Guard so that only ADMIN to check permissions
  findAll() {
    return this.usersService.findAll();
  }
}
