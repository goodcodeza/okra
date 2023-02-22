import { IsNotEmpty, Length } from 'class-validator';

export class ProcessIdentityDto {
  @IsNotEmpty()
  @Length(11, 11)
  bvn: string;
}
