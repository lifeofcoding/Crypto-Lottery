import { ethers, network } from "hardhat";

async function main() {
  const CryptoLottery = await ethers.getContractFactory("Lottery");
  const contractOwner = await ethers.getSigner(network.config.from || "");
  // const cryptoLottery = await CryptoLottery.deploy();
  const cryptoLottery = await CryptoLottery.connect(contractOwner).deploy();

  await cryptoLottery.deployed();

  console.log("Crypto Lottery deployed to:", cryptoLottery.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
