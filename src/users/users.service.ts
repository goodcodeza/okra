import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      email: 'nolan.pather@outlook.com',
      firstName: 'nolan',
      id: 1,
      lastName: 'pather',
      password: '12345',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const user: User = {
      email: createUserDto.email.toLowerCase().trim(),
      firstName: createUserDto.firstName.trim(),
      id: this.users.length + 1,
      lastName: createUserDto.lastName.trim(),
      password: createUserDto.password,
    };
    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users.map(this.toSafeUser);
  }

  async findOne(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase(),
    );

    // DO NO STORE PASSWORDS IN PLAIN TEXT - USE A SHA 256 HASH
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
