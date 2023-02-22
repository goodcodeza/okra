import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { LoginService } from './login/login.service';

@Module({
  imports: [UsersModule, CustomersModule],
  controllers: [AppController],
  providers: [LoginService],
})
export class AppModule {}
