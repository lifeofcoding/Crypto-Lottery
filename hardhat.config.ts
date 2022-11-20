import "@nomicfoundation/hardhat-toolbox";
import type { HardhatUserConfig } from "hardhat/config";

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "KEY";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

const Config: HardhatUserConfig = {
  solidity: "0.8.12",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    localhost: {
      from: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    },
  },
  // networks: {
  //   goerli: {
  //     url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  //     accounts: [GOERLI_PRIVATE_KEY],
  //   },
  // },
};
export default Config;