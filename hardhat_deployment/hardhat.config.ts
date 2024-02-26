import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configDotenv } from "dotenv";
configDotenv()

const config: HardhatUserConfig = {
  defaultNetwork: 'xrpl_sidechain',
  networks:{
    xrpl_sidechain: {
      url: 'https://rpc-evm-sidechain.xrpl.org',
      chainId: 1440002,
      accounts: [process.env.PRIVATE_KEY_ACC1 ?? ""]
    },
  },
  
  solidity: "0.8.5",
};

export default config;
