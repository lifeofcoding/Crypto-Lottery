import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useLastWinnerAmount = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useLastWinnerAmount"], async () => {
    const lastWinnerAmount: BigNumber = await contract.lastWinnerAmount();

    return lastWinnerAmount.toNumber();
  });
};

export default useLastWinnerAmount;
