import { z } from 'zod';

export const ACCOUNT_SCHEMA = z.object({
  account_no: z.string(),
  bank: z.string(),
});
