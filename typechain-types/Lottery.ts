/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface LotteryInterface extends utils.Interface {
  functions: {
    "BuyTickets()": FunctionFragment;
    "CurrentWinningReward()": FunctionFragment;
    "DrawWinnerTicket()": FunctionFragment;
    "IsWinner()": FunctionFragment;
    "RefundAll()": FunctionFragment;
    "RemainingTickets()": FunctionFragment;
    "WithdrawCommission()": FunctionFragment;
    "WithdrawWinnings()": FunctionFragment;
    "checkWinningsAmount()": FunctionFragment;
    "duration()": FunctionFragment;
    "expiration()": FunctionFragment;
    "getMyTickets()": FunctionFragment;
    "getTickets()": FunctionFragment;
    "getWinningsForAddress(address)": FunctionFragment;
    "lastWinner()": FunctionFragment;
    "lastWinnerAmount()": FunctionFragment;
    "lotteryOperator()": FunctionFragment;
    "maxTickets()": FunctionFragment;
    "operatorTotalCommission()": FunctionFragment;
    "restartDraw()": FunctionFragment;
    "ticketCommission()": FunctionFragment;
    "ticketPrice()": FunctionFragment;
    "tickets(uint256)": FunctionFragment;
    "winnings(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BuyTickets"
      | "CurrentWinningReward"
      | "DrawWinnerTicket"
      | "IsWinner"
      | "RefundAll"
      | "RemainingTickets"
      | "WithdrawCommission"
      | "WithdrawWinnings"
      | "checkWinningsAmount"
      | "duration"
      | "expiration"
      | "getMyTickets"
      | "getTickets"
      | "getWinningsForAddress"
      | "lastWinner"
      | "lastWinnerAmount"
      | "lotteryOperator"
      | "maxTickets"
      | "operatorTotalCommission"
      | "restartDraw"
      | "ticketCommission"
      | "ticketPrice"
      | "tickets"
      | "winnings"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BuyTickets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CurrentWinningReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DrawWinnerTicket",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "IsWinner", values?: undefined): string;
  encodeFunctionData(functionFragment: "RefundAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "RemainingTickets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WithdrawCommission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WithdrawWinnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkWinningsAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "expiration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMyTickets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTickets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWinningsForAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lastWinner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastWinnerAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryOperator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTickets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "operatorTotalCommission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restartDraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticketCommission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticketPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tickets",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "winnings",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "BuyTickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CurrentWinningReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DrawWinnerTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "IsWinner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "RefundAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "RemainingTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WithdrawCommission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WithdrawWinnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkWinningsAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expiration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMyTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWinningsForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastWinner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastWinnerAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxTickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorTotalCommission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restartDraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketCommission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tickets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "winnings", data: BytesLike): Result;

  events: {};
}

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BuyTickets(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    CurrentWinningReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    DrawWinnerTicket(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    IsWinner(overrides?: CallOverrides): Promise<[boolean]>;

    RefundAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    RemainingTickets(overrides?: CallOverrides): Promise<[BigNumber]>;

    WithdrawCommission(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    WithdrawWinnings(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkWinningsAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    expiration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMyTickets(overrides?: CallOverrides): Promise<[string[]]>;

    getTickets(overrides?: CallOverrides): Promise<[string[]]>;

    getWinningsForAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastWinner(overrides?: CallOverrides): Promise<[string]>;

    lastWinnerAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    lotteryOperator(overrides?: CallOverrides): Promise<[string]>;

    maxTickets(overrides?: CallOverrides): Promise<[BigNumber]>;

    operatorTotalCommission(overrides?: CallOverrides): Promise<[BigNumber]>;

    restartDraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ticketCommission(overrides?: CallOverrides): Promise<[BigNumber]>;

    ticketPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    tickets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    winnings(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  BuyTickets(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  CurrentWinningReward(overrides?: CallOverrides): Promise<BigNumber>;

  DrawWinnerTicket(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  IsWinner(overrides?: CallOverrides): Promise<boolean>;

  RefundAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  RemainingTickets(overrides?: CallOverrides): Promise<BigNumber>;

  WithdrawCommission(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  WithdrawWinnings(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkWinningsAmount(overrides?: CallOverrides): Promise<BigNumber>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  expiration(overrides?: CallOverrides): Promise<BigNumber>;

  getMyTickets(overrides?: CallOverrides): Promise<string[]>;

  getTickets(overrides?: CallOverrides): Promise<string[]>;

  getWinningsForAddress(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastWinner(overrides?: CallOverrides): Promise<string>;

  lastWinnerAmount(overrides?: CallOverrides): Promise<BigNumber>;

  lotteryOperator(overrides?: CallOverrides): Promise<string>;

  maxTickets(overrides?: CallOverrides): Promise<BigNumber>;

  operatorTotalCommission(overrides?: CallOverrides): Promise<BigNumber>;

  restartDraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ticketCommission(overrides?: CallOverrides): Promise<BigNumber>;

  ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

  tickets(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  winnings(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    BuyTickets(overrides?: CallOverrides): Promise<void>;

    CurrentWinningReward(overrides?: CallOverrides): Promise<BigNumber>;

    DrawWinnerTicket(overrides?: CallOverrides): Promise<void>;

    IsWinner(overrides?: CallOverrides): Promise<boolean>;

    RefundAll(overrides?: CallOverrides): Promise<void>;

    RemainingTickets(overrides?: CallOverrides): Promise<BigNumber>;

    WithdrawCommission(overrides?: CallOverrides): Promise<void>;

    WithdrawWinnings(overrides?: CallOverrides): Promise<void>;

    checkWinningsAmount(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    expiration(overrides?: CallOverrides): Promise<BigNumber>;

    getMyTickets(overrides?: CallOverrides): Promise<string[]>;

    getTickets(overrides?: CallOverrides): Promise<string[]>;

    getWinningsForAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastWinner(overrides?: CallOverrides): Promise<string>;

    lastWinnerAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryOperator(overrides?: CallOverrides): Promise<string>;

    maxTickets(overrides?: CallOverrides): Promise<BigNumber>;

    operatorTotalCommission(overrides?: CallOverrides): Promise<BigNumber>;

    restartDraw(overrides?: CallOverrides): Promise<void>;

    ticketCommission(overrides?: CallOverrides): Promise<BigNumber>;

    ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    tickets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    winnings(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    BuyTickets(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    CurrentWinningReward(overrides?: CallOverrides): Promise<BigNumber>;

    DrawWinnerTicket(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    IsWinner(overrides?: CallOverrides): Promise<BigNumber>;

    RefundAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    RemainingTickets(overrides?: CallOverrides): Promise<BigNumber>;

    WithdrawCommission(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    WithdrawWinnings(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkWinningsAmount(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    expiration(overrides?: CallOverrides): Promise<BigNumber>;

    getMyTickets(overrides?: CallOverrides): Promise<BigNumber>;

    getTickets(overrides?: CallOverrides): Promise<BigNumber>;

    getWinningsForAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastWinner(overrides?: CallOverrides): Promise<BigNumber>;

    lastWinnerAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryOperator(overrides?: CallOverrides): Promise<BigNumber>;

    maxTickets(overrides?: CallOverrides): Promise<BigNumber>;

    operatorTotalCommission(overrides?: CallOverrides): Promise<BigNumber>;

    restartDraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ticketCommission(overrides?: CallOverrides): Promise<BigNumber>;

    ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    tickets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winnings(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BuyTickets(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    CurrentWinningReward(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DrawWinnerTicket(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    IsWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RefundAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    RemainingTickets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WithdrawCommission(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    WithdrawWinnings(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkWinningsAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    expiration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMyTickets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTickets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWinningsForAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWinnerAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteryOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxTickets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorTotalCommission(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    restartDraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ticketCommission(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticketPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tickets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    winnings(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}