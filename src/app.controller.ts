import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginService } from './login/login.service';

@Controller()
export class AppController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.loginService.login(loginUserDto);
  }
}
