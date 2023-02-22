import { z } from 'zod';

export const NUBAN_SCHEMA = z.object({
  birthdate: z.string(),
  account_number: z.string(),
  bank: z.string(),
  full_name: z.string(),
  phone_number: z.string(),
  bvn: z.string(),
});
