import { Module } from '@nestjs/common';
import { NubanService } from './nuban.service';

@Module({
  providers: [NubanService],
})
export class NubanModule {}
