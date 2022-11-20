import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useTicketsRemaining = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useTicketsRemaining"], async () => {
    const ticketsRemaining: BigNumber = await contract.RemainingTickets();

    return ticketsRemaining.toNumber();
  });
};

export default useTicketsRemaining;
