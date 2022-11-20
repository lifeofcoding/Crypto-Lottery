/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Lottery, LotteryInterface } from "../Lottery";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BuyTickets",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "CurrentWinningReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DrawWinnerTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "IsWinner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RefundAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "RemainingTickets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WithdrawCommission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "WithdrawWinnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkWinningsAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "expiration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyTickets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTickets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getWinningsForAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastWinnerAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotteryOperator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTickets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorTotalCommission",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "restartDraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ticketCommission",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ticketPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tickets",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "winnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006002553480156200001657600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061070842620000689190620000ad565b6000819055506200010a565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620000ba8262000074565b9150620000c78362000074565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620000ff57620000fe6200007e565b5b828201905092915050565b611db0806200011a6000396000f3fe60806040526004361061014b5760003560e01c806391d8b14e116100b6578063c6944fa01161006f578063c6944fa0146103f7578063dd64e53414610422578063e1d10d851461045f578063ea3a14991461048a578063f2613269146104c7578063fe188184146104de5761014b565b806391d8b14e1461032a57806393a563b51461033457806396c85ef31461035f5780639b8947031461038a578063a88f4672146103b5578063ba946d79146103cc5761014b565b80634788af7c116101085780634788af7c1461023e5780634ed026221461025557806350b44712146102805780635a58acdd146102bd5780636032a4f9146102e857806371827b7b146103135761014b565b806306f7f3bf146101505780630789c6071461017b5780630fb5a6b4146101a65780631209b1f6146101d157806335580df2146101fc5780634665096d14610213575b600080fd5b34801561015c57600080fd5b50610165610509565b6040516101729190611427565b60405180910390f35b34801561018757600080fd5b5061019061050f565b60405161019d9190611427565b60405180910390f35b3480156101b257600080fd5b506101bb610561565b6040516101c89190611427565b60405180910390f35b3480156101dd57600080fd5b506101e6610567565b6040516101f39190611427565b60405180910390f35b34801561020857600080fd5b50610211610572565b005b34801561021f57600080fd5b50610228610661565b6040516102359190611427565b60405180910390f35b34801561024a57600080fd5b50610253610667565b005b34801561026157600080fd5b5061026a61093b565b6040516102779190611532565b60405180910390f35b34801561028c57600080fd5b506102a760048036038101906102a29190611585565b6109c9565b6040516102b491906115c1565b60405180910390f35b3480156102c957600080fd5b506102d2610a08565b6040516102df91906115c1565b60405180910390f35b3480156102f457600080fd5b506102fd610a2e565b60405161030a9190611427565b60405180910390f35b34801561031f57600080fd5b50610328610a39565b005b610332610b59565b005b34801561034057600080fd5b50610349610cc6565b6040516103569190611427565b60405180910390f35b34801561036b57600080fd5b50610374610cdf565b60405161038191906115f7565b60405180910390f35b34801561039657600080fd5b5061039f610d28565b6040516103ac9190611427565b60405180910390f35b3480156103c157600080fd5b506103ca610d2d565b005b3480156103d857600080fd5b506103e1610e96565b6040516103ee9190611427565b60405180910390f35b34801561040357600080fd5b5061040c610e9c565b6040516104199190611427565b60405180910390f35b34801561042e57600080fd5b506104496004803603810190610444919061163e565b610ebb565b6040516104569190611427565b60405180910390f35b34801561046b57600080fd5b50610474610f04565b6040516104819190611532565b60405180910390f35b34801561049657600080fd5b506104b160048036038101906104ac919061163e565b611135565b6040516104be9190611427565b60405180910390f35b3480156104d357600080fd5b506104dc61114d565b005b3480156104ea57600080fd5b506104f3611249565b60405161050091906115c1565b60405180910390f35b60045481565b6000803390506000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050809250505090565b61070881565b662386f26fc1000081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610602576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f9906116ee565b60405180910390fd5b60003390506000600254905060006002819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561065c573d6000803e3d6000fd5b505050565b60005481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ee906116ee565b60405180910390fd5b60006006805490501161073f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107369061175a565b60405180910390fd5b60006006805490504361075291906117a9565b4090506000428260405160200161076a929190611829565b6040516020818303038152906040528051906020012060001c90506000600680549050826107989190611884565b90506000600682815481106107b0576107af6118b5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555066038d7ea4c68000662386f26fc1000061083891906117a9565b60068054905061084891906118e4565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610896919061193e565b92505081905550600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460048190555066038d7ea4c680006006805490506108fb91906118e4565b6002600082825461090c919061193e565b925050819055506006600061092191906113d0565b6107084261092f919061193e565b60008190555050505050565b606060068054806020026020016040519081016040528092919081815260200182805480156109bf57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610975575b5050505050905090565b600681815481106109d957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b66038d7ea4c6800081565b610a41610cdf565b610a80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a77906119e0565b60405180910390fd5b60003390506000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610b54573d6000803e3d6000fd5b505050565b6000662386f26fc1000034610b6e9190611884565b14610b7f662386f26fc1000061126f565b604051602001610b8f9190611ac6565b60405160208183030381529060405290610bdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd69190611b45565b60405180910390fd5b506000662386f26fc1000034610bf59190611b67565b9050610bff610cc6565b811115610c41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3890611be4565b60405180910390fd5b60005b81811015610cc2576006339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080610cba90611c04565b915050610c44565b5050565b60006006805490506064610cda91906117a9565b905090565b600080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411905090565b606481565b600054421015610d72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6990611c99565b60405180910390fd5b60005b600680549050811015610e8557600060068281548110610d9857610d976118b5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600060068381548110610ddb57610dda6118b5565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff166108fc662386f26fc100009081150290604051600060405180830381858888f19350505050158015610e70573d6000803e3d6000fd5b50508080610e7d90611c04565b915050610d75565b5060066000610e9491906113d0565b565b60025481565b6000662386f26fc10000600680549050610eb691906118e4565b905090565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600060068054905090506000805b82811015610fb0573373ffffffffffffffffffffffffffffffffffffffff1660068281548110610f4757610f466118b5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f9d578180610f9990611c04565b9250505b8080610fa890611c04565b915050610f14565b5060008167ffffffffffffffff811115610fcd57610fcc611cb9565b5b604051908082528060200260200182016040528015610ffb5781602001602082028036833780820191505090505b5090506000805b8481101561112a573373ffffffffffffffffffffffffffffffffffffffff1660068281548110611035576110346118b5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561111757600681815481106110905761108f6118b5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383815181106110ce576110cd6118b5565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050818061111390611c04565b9250505b808061112290611c04565b915050611002565b508194505050505090565b60056020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d4906116ee565b60405180910390fd5b600060068054905014611225576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121c90611d5a565b60405180910390fd5b6006600061123391906113d0565b61070842611241919061193e565b600081905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008214156112b7576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506113cb565b600082905060005b600082146112e95780806112d290611c04565b915050600a826112e29190611b67565b91506112bf565b60008167ffffffffffffffff81111561130557611304611cb9565b5b6040519080825280601f01601f1916602001820160405280156113375781602001600182028036833780820191505090505b5090505b600085146113c45760018261135091906117a9565b9150600a8561135f9190611884565b603061136b919061193e565b60f81b818381518110611381576113806118b5565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856113bd9190611b67565b945061133b565b8093505050505b919050565b50805460008255906000526020600020908101906113ee91906113f1565b50565b5b8082111561140a5760008160009055506001016113f2565b5090565b6000819050919050565b6114218161140e565b82525050565b600060208201905061143c6000830184611418565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114998261146e565b9050919050565b6114a98161148e565b82525050565b60006114bb83836114a0565b60208301905092915050565b6000602082019050919050565b60006114df82611442565b6114e9818561144d565b93506114f48361145e565b8060005b8381101561152557815161150c88826114af565b9750611517836114c7565b9250506001810190506114f8565b5085935050505092915050565b6000602082019050818103600083015261154c81846114d4565b905092915050565b600080fd5b6115628161140e565b811461156d57600080fd5b50565b60008135905061157f81611559565b92915050565b60006020828403121561159b5761159a611554565b5b60006115a984828501611570565b91505092915050565b6115bb8161148e565b82525050565b60006020820190506115d660008301846115b2565b92915050565b60008115159050919050565b6115f1816115dc565b82525050565b600060208201905061160c60008301846115e8565b92915050565b61161b8161148e565b811461162657600080fd5b50565b60008135905061163881611612565b92915050565b60006020828403121561165457611653611554565b5b600061166284828501611629565b91505092915050565b600082825260208201905092915050565b7f43616c6c6572206973206e6f7420746865206c6f7474657279206f706572617460008201527f6f72000000000000000000000000000000000000000000000000000000000000602082015250565b60006116d860228361166b565b91506116e38261167c565b604082019050919050565b60006020820190508181036000830152611707816116cb565b9050919050565b7f4e6f207469636b65747320776572652070757263686173656400000000000000600082015250565b600061174460198361166b565b915061174f8261170e565b602082019050919050565b6000602082019050818103600083015261177381611737565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117b48261140e565b91506117bf8361140e565b9250828210156117d2576117d161177a565b5b828203905092915050565b6000819050919050565b6117f86117f38261140e565b6117dd565b82525050565b6000819050919050565b6000819050919050565b61182361181e826117fe565b611808565b82525050565b600061183582856117e7565b6020820191506118458284611812565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061188f8261140e565b915061189a8361140e565b9250826118aa576118a9611855565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006118ef8261140e565b91506118fa8361140e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156119335761193261177a565b5b828202905092915050565b60006119498261140e565b91506119548361140e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119895761198861177a565b5b828201905092915050565b7f43616c6c6572206973206e6f7420612077696e6e657200000000000000000000600082015250565b60006119ca60168361166b565b91506119d582611994565b602082019050919050565b600060208201905081810360008301526119f9816119bd565b9050919050565b7f7468652076616c7565206d757374206265206d756c7469706c65206f66200000815250565b600081519050919050565b600081905092915050565b60005b83811015611a5a578082015181840152602081019050611a3f565b83811115611a69576000848401525b50505050565b6000611a7a82611a26565b611a848185611a31565b9350611a94818560208601611a3c565b80840191505092915050565b7f2045746865720000000000000000000000000000000000000000000000000000815250565b6000611ad182611a00565b601e82019150611ae18284611a6f565b9150611aec82611aa0565b60068201915081905092915050565b6000601f19601f8301169050919050565b6000611b1782611a26565b611b21818561166b565b9350611b31818560208601611a3c565b611b3a81611afb565b840191505092915050565b60006020820190508181036000830152611b5f8184611b0c565b905092915050565b6000611b728261140e565b9150611b7d8361140e565b925082611b8d57611b8c611855565b5b828204905092915050565b7f4e6f7420656e6f756768207469636b65747320617661696c61626c652e000000600082015250565b6000611bce601d8361166b565b9150611bd982611b98565b602082019050919050565b60006020820190508181036000830152611bfd81611bc1565b9050919050565b6000611c0f8261140e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c4257611c4161177a565b5b600182019050919050565b7f746865206c6f7474657279206e6f742065787069726564207965740000000000600082015250565b6000611c83601b8361166b565b9150611c8e82611c4d565b602082019050919050565b60006020820190508181036000830152611cb281611c76565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f43616e6e6f74205265737461727420447261772061732044726177206973206960008201527f6e20706c61790000000000000000000000000000000000000000000000000000602082015250565b6000611d4460268361166b565b9150611d4f82611ce8565b604082019050919050565b60006020820190508181036000830152611d7381611d37565b905091905056fea2646970667358221220639e0a735deabba4ed4d9f688b81ffa587c8d2d468cd9a3796c2347815de8c8a64736f6c634300080c0033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lottery> {
    return super.deploy(overrides || {}) as Promise<Lottery>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  override connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
