import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useTicketPrice = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useTicketPrice"], async () => {
    const ticketPrice: BigNumber = await contract.ticketPrice();

    return ticketPrice.toString();
  });
};

export default useTicketPrice;
