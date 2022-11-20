import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useMyTickets = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useMyTickets"], async () => {
    const myTickets: string[] = await contract.getMyTickets();

    return myTickets;
  });
};

export default useMyTickets;
