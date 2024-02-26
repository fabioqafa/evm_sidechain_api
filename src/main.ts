import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

import { ethers } from 'ethers';
import { configDotenv } from 'dotenv';
configDotenv()

const contractAbi = [
  {
    "inputs": [],
    "name": "retrieve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "store",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const contractAddress = '0x040b384749e8A05D61cd20692ce46E8998773Ba5'
const privateKey = process.env.PRIVATE_KEY_ACC1
const evm_sidechain_url = 'https://rpc-evm-sidechain.xrpl.org'

export let provider: ethers.JsonRpcProvider
export let wallet: ethers.Wallet
export let contract: ethers.Contract

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('XRPL Devnet Sidechain Basic API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //Ethers provider object setup for smart contract interaction
  provider = new ethers.JsonRpcProvider(evm_sidechain_url);
  wallet = new ethers.Wallet(privateKey, provider);
  contract = new ethers.Contract(contractAddress, contractAbi, wallet)

  await app.listen(3000);
  console.log(provider, wallet, contract)
}

bootstrap();
