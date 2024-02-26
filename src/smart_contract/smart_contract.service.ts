import { Injectable } from '@nestjs/common';
import { CreateSmartContractDto } from './dto/create-smart_contract.dto';
import { contract, provider, wallet} from 'src/main';
import executeTransaction from 'utils/exe_trnx';

@Injectable()
export class SmartContractService {
  store = async({number} : CreateSmartContractDto) => {
    const txResponse = await contract.store(number)

    return txResponse
  }

  retrieve = async() => {
    const result = await contract.retrieve()

    return result
  }

}
