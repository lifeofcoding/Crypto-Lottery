import Contract from "../artifacts/contracts/Lottery.sol/Lottery.json";
const contractABI = Contract.abi;
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "";

const ethereum =
  typeof window !== "undefined" && window.hasOwnProperty("ethereum")
    ? (window as any).ethereum
    : undefined;

const currency: string = "ETH";

export { contractABI, contractAddress, ethereum, currency };
