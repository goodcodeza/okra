import { Module } from '@nestjs/common';
import { BVNService } from './bvn.service';

@Module({
  providers: [BVNService],
})
export class BvnModule {}
