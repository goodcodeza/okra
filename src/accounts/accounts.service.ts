import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { ACCOUNT_SCHEMA } from './entities/account.entity';

@Injectable()
export class AccountsService {
  async findAll(bvn: string) {
    const res = await fetch('https://api.okra.ng/v2/mock-api/accounts-by-bvn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bvn }),
    });

    if (!res.ok) {
      console.error(res.status, await res.json());
      return null;
    }

    const { data } = ACCOUNTS_BY_BVN_SCHEMA.parse(await res.json());

    return data.response;
  }
}

const ACCOUNTS_BY_BVN_SCHEMA = z.object({
  status: z.string(),
  message: z.string(),
  data: z.object({
    response: z.array(ACCOUNT_SCHEMA),
  }),
});
