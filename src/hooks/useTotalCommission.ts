import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { useStore } from "../components/Store";

const useTotalCommission = () => {
  const [getContract] = useStore((store) => store.getContract);
  const { contract } = getContract();
  return useQuery(["useTotalCommission"], async () => {
    const operatorTotalCommission: BigNumber =
      await contract.operatorTotalCommission();

    return operatorTotalCommission.toString();
  });
};

export default useTotalCommission;
