import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartContractModule } from './smart_contract/smart_contract.module';

@Module({
  imports: [SmartContractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
