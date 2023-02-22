import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class LoginService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email, password);
    if (!user) {
      return null;
    }

    return { id: user.id, email: user.email };
  }

  async login({ email, password }: LoginUserDto) {
    const user = await this.validateUser(email, password);
    if (!user) {
      return null;
    }

    const payload = { username: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
