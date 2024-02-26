import { Module } from '@nestjs/common';
import { SmartContractService } from './smart_contract.service';
import { SmartContractController } from './smart_contract.controller';

@Module({
  controllers: [SmartContractController],
  providers: [SmartContractService],
})
export class SmartContractModule {}
