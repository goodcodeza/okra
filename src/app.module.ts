import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { LoginModule } from './login/login.module';
import { IdentityModule } from './identity/identity.module';
import { AccountsModule } from './accounts/accounts.module';
import { NubanModule } from './nuban/nuban.module';
import { BvnModule } from './bvn/bvn.module';

@Module({
  imports: [
    UsersModule,
    CustomersModule,
    LoginModule,
    IdentityModule,
    AccountsModule,
    NubanModule,
    BvnModule,
  ],
})
export class AppModule {}
