import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { NUBAN_SCHEMA } from './entities/nuban.entity';

@Injectable()
export class NubanService {
  async confirm(bank: string, bvn: string, nuban: string) {
    const res = await fetch('https://api.okra.ng/v2/mock-api/confirm-nuban', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank,
        bvn,
        nuban,
      }),
    });

    if (!res.ok) {
      console.error(res.status, await res.json());
      return null;
    }

    const { data } = CONFIRM_NUBAN_SCHEMA.passthrough().parse(await res.json());

    return data.response;
  }
}

const CONFIRM_NUBAN_SCHEMA = z.object({
  status: z.string(),
  message: z.string(),
  data: z.object({
    response: NUBAN_SCHEMA,
  }),
});
