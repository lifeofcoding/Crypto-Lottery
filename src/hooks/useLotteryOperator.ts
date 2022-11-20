import { useQuery } from "@tanstack/react-query";
import { string } from "zod";
import { useStore } from "../components/Store";

const useLotteryOperator = (account: string | undefined) => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract, signer } = getContract();
  const connection = contract.connect(signer);
  const addr = connection.address;
  return useQuery(
    ["useLotteryOperator", account],
    async () => {
      const lotteryOperator: string = await contract.lotteryOperator();

      console.log("lotteryOperator", lotteryOperator);
      console.log("addr", addr);
      console.log("account", account);

      return lotteryOperator.toLowerCase() === account?.toLowerCase();
    },
    { enabled: string && string.length ? true : false }
  );
};

export default useLotteryOperator;
