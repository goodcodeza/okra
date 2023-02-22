import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { BVN_SCHEMA } from './entities/bvn.entity';

@Injectable()
export class BVNService {
  async confirm(bvn: string, date_of_birth: string) {
    const res = await fetch('https://api.okra.ng/v2/mock-api/confirm-bvn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dob: date_of_birth,
        bvn,
      }),
    });

    if (!res.ok) {
      console.error(res.status, await res.json());
      return null;
    }

    const { data } = CONFIRM_BVN_SCHEMA.parse(await res.json());

    return data.response;
  }
}

const CONFIRM_BVN_SCHEMA = z.object({
  status: z.string(),
  message: z.string(),
  data: z.object({
    response: BVN_SCHEMA,
  }),
});
