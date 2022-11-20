import { useQuery } from "@tanstack/react-query";
import { useStore } from "../components/Store";

const useLastWinner = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useLastWinner"], async () => {
    const lastWinner: string = await contract.lastWinner();

    return lastWinner;
  });
};

export default useLastWinner;
