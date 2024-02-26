import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmartContractService } from './smart_contract.service';
import { CreateSmartContractDto } from './dto/create-smart_contract.dto';

@Controller('smart-contract')
export class SmartContractController {
  constructor(private readonly smartContractService: SmartContractService) {}

  @Post()
  store(@Body() createSmartContractDto: CreateSmartContractDto) {
    return this.smartContractService.store(createSmartContractDto);
  }

  @Get()
  retrieve() {
    return this.smartContractService.retrieve();
  }

}
