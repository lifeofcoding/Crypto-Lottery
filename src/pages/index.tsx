import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { ethers } from "ethers";
import { useQueryClient } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import { currency } from "../utils/constants";
import useTicketsRemaining from "../hooks/useTicketsRemaining";
import useCurrentWinningReward from "../hooks/useCurrentWinningReward";
import useTicketPrice from "../hooks/useTicketPrice";
import useTicketCommission from "../hooks/useTicketCommission";
import useExpiration from "../hooks/useExpiration";
import CountdownTimer from "../components/CountdownTimer";
import { useAlerts } from "../components/layout/Alerts";
import { useStore } from "../components/Store";
import useMyTickets from "../hooks/useMyTickets";
import useGetWinningsForAddress from "../hooks/useGetWinningsForAddress";
import useLastWinner from "../hooks/useLastWinner";
import useLastWinnerAmount from "../hooks/useLastWinnerAmount";
import useLotteryOperator from "../hooks/useLotteryOperator";
import AdminControls from "../components/AdminControls";
import useAccount from "../hooks/useAccount";

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const [store] = useStore((store) => store);
  const [amount, setAmount] = useState<number>(0);
  const { data: ticketsRemaining } = useTicketsRemaining();
  const { data: currentWinningReward } = useCurrentWinningReward();
  const { data: ticketPrice } = useTicketPrice();
  const { data: ticketCommission } = useTicketCommission();
  const { data: expiration } = useExpiration();
  const { data: myTickets } = useMyTickets();
  const { data: account } = useAccount();
  const { data: winnings } = useGetWinningsForAddress(account);
  const { data: lastWinner } = useLastWinner();
  const { data: lastWinnerAmount } = useLastWinnerAmount();
  const { data: isLotteryOperator } = useLotteryOperator(account);
  console.log("winnings", winnings);
  const alert = useAlerts();
  const handleClick = async () => {
    if (!ticketPrice) return;
    const notification = alert({
      type: "loading",
      message: "Buying tickets...",
    });

    try {
      const { contract } = store.getContract();
      const result = await contract.BuyTickets({
        value: ethers.utils.parseEther(
          (Number(ethers.utils.formatEther(ticketPrice)) * amount).toString()
        ),
      });

      console.log("result", result);

      await result.wait();
      if (notification) notification();
      alert({ type: "success", message: "Success" });
      queryClient.invalidateQueries([
        "useTicketsRemaining",
        "useCurrentWinningReward",
      ]);
    } catch (error) {
      if (notification) notification();
      alert({ type: "error", message: "Unable to purchase tickets" });
      console.warn(error);
    }
  };

  const withdrawWinnings = async () => {
    const notification = alert({
      type: "loading",
      message: "Withdrawling Winnings...",
    });

    try {
      const { contract } = store.getContract();
      const result = await contract.WithdrawWinnings();

      console.log("result", result);

      await result.wait();
      if (notification) notification();
      alert({ type: "success", message: "Success" });
      queryClient.invalidateQueries(["useGetWinningsForAddress"]);
    } catch (error) {
      if (notification) notification();
      alert({ type: "error", message: "Something went wrong" });
      console.warn(error);
    }
  };

  return (
    <>
      <>
        <Head>
          <title>Crypto Lottery</title>
          <meta
            name="description"
            content="Created by Jimmy Rousseau @lifeofcoding"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container mx-auto flex min-h-full flex-col items-center justify-center p-4">
          <div className="absolute top-0 left-0  w-full  bg-[rgba(0,0,0,0.8)]">
            <div className="mt-20 flex min-h-screen flex-col text-white">
              <Marquee className="mb-5 p-5" gradient={false} speed={100}>
                <div className="mx-10 flex space-x-2 font-bold">
                  <h4>Last Winner: {lastWinner}</h4>
                  <h4>
                    Previous Winnings:{" "}
                    {lastWinnerAmount &&
                      ethers.utils.formatEther(
                        lastWinnerAmount.toString()
                      )}{" "}
                    {currency}
                  </h4>
                </div>
              </Marquee>

              {isLotteryOperator && (
                <div className="flex justify-center">
                  <AdminControls />
                </div>
              )}

              {winnings && winnings > 0 ? (
                <div className="mx-auto mt-5 max-w-md md:max-w-2xl lg:max-w-4xl">
                  <button
                    onClick={withdrawWinnings}
                    className="animate-pulse rounded-xl bg-gradient-to-b from-blue-500 to-blue-200 p-5"
                  >
                    <p className="font-bold">Winner!</p>
                    <p>
                      Total Winnings{" "}
                      {ethers.utils.formatEther(winnings.toString())} {currency}
                    </p>
                    <p className="font-semibold">Click here to withdraw</p>
                  </button>
                </div>
              ) : null}
              <div className="m-5 items-start justify-center space-y-5 md:flex md:flex-row md:space-x-5 md:space-y-0">
                <div className="stats-container">
                  <h1 className="text-center text-5xl">Next Draw</h1>
                  <div className="flex justify-between space-x-2 p-2">
                    <div className="stats">
                      <h2 className="text-small">Total Pool</h2>
                      <p className="text-xs">
                        {currentWinningReward &&
                          ethers.utils.formatEther(currentWinningReward)}{" "}
                        {currency}
                      </p>
                    </div>
                    <div className="stats">
                      <h2 className="text-small">Tickets Remaining</h2>
                      <p className="text-xs">{ticketsRemaining}</p>
                    </div>
                  </div>
                  <div className="mt-5 mb-3">
                    <CountdownTimer />
                  </div>
                </div>
                <div className="stats-container space-y-2">
                  <div className="stats-container">
                    <div className="flex items-center justify-between pb-2 text-white">
                      <h2>Price per Ticket</h2>
                      <p>
                        {ticketPrice && ethers.utils.formatEther(ticketPrice)}{" "}
                        {currency}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 border p-4 text-white">
                      <p>TICKETS</p>
                      <input
                        type="number"
                        className="flex w-full bg-transparent text-right outline-none"
                        min={1}
                        max={10}
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                      />
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center justify-between text-sm font-extrabold italic text-slate-50">
                        <p>Total Cost of Tickets</p>
                        <p>
                          {ticketPrice &&
                            Number(ethers.utils.formatEther(ticketPrice)) *
                              amount}{" "}
                          {currency}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs italic text-slate-50">
                        <p>Service Fees</p>
                        <p>
                          {ticketCommission &&
                            ethers.utils.formatEther(ticketCommission)}{" "}
                          {currency}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs italic text-slate-50">
                        <p>+ Network Fees</p>
                        <p>TBC</p>
                      </div>
                    </div>
                    <button
                      disabled={
                        (expiration && expiration < Date.now().toString()) ||
                        ticketsRemaining === 0 ||
                        amount < 1
                          ? true
                          : false
                      }
                      onClick={handleClick}
                      className="mt-5 w-full rounded-md bg-gradient-to-br from-purple-500 to-blue-200 px-10 py-5 font-semibold shadow-xl disabled:cursor-not-allowed disabled:from-gray-600"
                    >
                      Buy {amount} Tickets for{" "}
                      {ticketPrice &&
                        Number(ethers.utils.formatEther(ticketPrice)) *
                          amount}{" "}
                      {currency}
                    </button>
                  </div>
                  {myTickets && myTickets.length > 0 && (
                    <div className="stats">
                      <p className="mb-2 text-lg">
                        You Have {myTickets.length} in this draw
                      </p>
                      <div className="flex max-w-sm flex-wrap gap-2">
                        {myTickets.map((_, i) => (
                          <p
                            key={i}
                            className="flex h-20 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-600/30 text-xs italic text-gray-50"
                          >
                            {i + 1}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default Home;
