import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useGetWinningsForAddress = (account: string | undefined) => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();

  return useQuery(
    ["useGetWinningsForAddress"],
    async () => {
      const getWinningsForAddress: BigNumber =
        await contract.getWinningsForAddress(account);

      return getWinningsForAddress.toNumber();
    },
    {
      enabled: account && account.length ? true : false,
      refetchInterval: 10 * 1000,
    }
  );
};

export default useGetWinningsForAddress;
