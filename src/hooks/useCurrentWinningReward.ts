import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useCurrentWinningReward = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useCurrentWinningReward"], async () => {
    const ticketsRemaining: BigNumber = await contract.CurrentWinningReward();

    return ticketsRemaining.toString();
  });
};

export default useCurrentWinningReward;
