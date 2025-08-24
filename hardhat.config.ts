import { HardhatUserConfig } from "hardhat/types/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
  },
};

export default config;