import { PartialType } from '@nestjs/mapped-types';
import { CreateSmartContractDto } from './create-smart_contract.dto';

export class UpdateSmartContractDto extends PartialType(CreateSmartContractDto) {}
