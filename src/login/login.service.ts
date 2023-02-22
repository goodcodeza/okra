import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class LoginService {
  login(loginUserDto: LoginUserDto) {
    return 'This action logs a user into the application';
  }
}
