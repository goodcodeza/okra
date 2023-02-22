import { IsNotEmpty, Length } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @Length(11, 11)
  bvn: string;
}
