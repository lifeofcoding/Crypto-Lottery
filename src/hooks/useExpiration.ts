import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useExpiration = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useExpiration"], async () => {
    const expiration: BigNumber = await contract.expiration();

    return expiration.toString();
  });
};

export default useExpiration;
