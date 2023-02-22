import { Injectable } from '@nestjs/common';
import { LoginUserDto } from 'src/dto/login-user.dto';

@Injectable()
export class LoginService {
  login(loginUserDto: LoginUserDto) {
    return '';
  }
}
