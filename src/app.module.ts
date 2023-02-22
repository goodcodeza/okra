import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, CustomersModule, LoginModule],
})
export class AppModule {}
