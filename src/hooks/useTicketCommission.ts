import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useTicketCommission = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useTicketCommission"], async () => {
    const ticketCommission: BigNumber = await contract.ticketCommission();

    return ticketCommission.toString();
  });
};

export default useTicketCommission;
