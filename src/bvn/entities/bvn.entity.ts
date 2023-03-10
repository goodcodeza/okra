import { z } from 'zod';

export const BVN_SCHEMA = z.object({
  FirstName: z.string(),
  MiddleName: z.string(),
  LastName: z.string(),
  DateOfBirth: z.string(),
  Address: z.string(),
  Gender: z.string(),
  PhotoId: z.string(),
  Enrollment_Date: z.string(),
  Enrollment_Bank: z.string(),
  Phone: z.string(),
  Email: z.string(),
  FullName: z.string(),
  Bvn: z.string(),
  Nin: z.string(),
  LGAOrigin: z.string(),
  LGAOfResidence: z.string(),
  nationality: z.string(),
  State_of_residence: z.string(),
  State_of_origin: z.string(),
  EnnrollmentBbank: z.string(),
  RegistrationDate: z.string(),
  MaritalStatus: z.string(),
  AccountLevel: z.string(),
  VerificationCountry: z.string(),
  Washlist: z.boolean().optional().default(false),
});

export type BVN = z.infer<typeof BVN_SCHEMA>;
