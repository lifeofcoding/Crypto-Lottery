import { ethers } from "ethers";
import { useQueryClient } from "@tanstack/react-query";
import useTotalCommission from "../hooks/useTotalCommission";
import { currency } from "../utils/constants";
import { useAlerts } from "./layout/Alerts";
import { useStore } from "./Store";

const AdminControls = () => {
  const { data: totalCommission } = useTotalCommission();
  const alert = useAlerts();
  const queryClient = useQueryClient();
  const [store] = useStore((store) => store);

  const drawWinner = async () => {
    const notification = alert({
      type: "loading",
      message: "Drawing Winner...",
    });

    try {
      const { contract } = store.getContract();
      const result = await contract.DrawWinnerTicket();

      console.log("result", result);

      await result.wait();
      if (notification) notification();
      alert({ type: "success", message: "Success" });
      queryClient.resetQueries();
    } catch (error) {
      if (notification) notification();
      alert({ type: "error", message: "Something went wrong" });
      console.warn(error);
    }
  };

  const withdrawCommission = async () => {
    const notification = alert({
      type: "loading",
      message: "Withdrawing commission...",
    });

    try {
      const { contract } = store.getContract();
      const result = await contract.WithDrawCommission();

      console.log("result", result);

      await result.wait();
      if (notification) notification();
      alert({ type: "success", message: "Success" });
      queryClient.resetQueries();
    } catch (error) {
      if (notification) notification();
      alert({ type: "error", message: "Something went wrong" });
      console.warn(error);
    }
  };

  const restartDraw = async () => {
    const notification = alert({
      type: "loading",
      message: "Restarting draw...",
    });

    try {
      const { contract } = store.getContract();
      const result = await contract.restartDraw();

      console.log("result", result);

      await result.wait();
      if (notification) notification();
      alert({ type: "success", message: "Success" });
      queryClient.resetQueries();
    } catch (error) {
      if (notification) notification();
      alert({ type: "error", message: "Something went wrong" });
      console.warn(error);
    }
  };

  const refundAll = async () => {
    const notification = alert({
      type: "loading",
      message: "Restarting draw...",
    });

    try {
      const { contract } = store.getContract();
      const result = await contract.RefundAll();

      console.log("result", result);

      await result.wait();
      if (notification) notification();
      alert({ type: "success", message: "Success" });
      queryClient.resetQueries();
    } catch (error) {
      if (notification) notification();
      alert({ type: "error", message: "Something went wrong" });
      console.warn(error);
    }
  };

  return (
    <div className="rounded-md border px-5 py-3 text-center">
      <h2 className="font-bold">Admin Controls</h2>
      <p className="mb-5">
        Total Commisson to be withdrawn{" "}
        {totalCommission && ethers.utils.formatEther(totalCommission)}{" "}
        {currency}
      </p>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <button className="admin-button" onClick={drawWinner}>
          Draw Winner
        </button>
        <button className="admin-button" onClick={withdrawCommission}>
          Withdraw Commison
        </button>
        <button className="admin-button" onClick={restartDraw}>
          Restart Draw
        </button>
        <button className="admin-button" onClick={refundAll}>
          Refund All
        </button>
      </div>
    </div>
  );
};

export default AdminControls;
