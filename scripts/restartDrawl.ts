import { ethers } from "hardhat";

async function main() {
  const CryptoLottery = await ethers.getContractFactory("Lottery");
  const cryptoLottery = CryptoLottery.attach(
    "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  );

  await cryptoLottery.restartDraw();

  console.log("Restart Draw:", cryptoLottery);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
