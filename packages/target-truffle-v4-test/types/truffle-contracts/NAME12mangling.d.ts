/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { BigNumber } from "bignumber.js";

export interface NAME12manglingContract
  extends Truffle.Contract<NAME12manglingInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<NAME12manglingInstance>;
}

type AllEvents = never;

export interface NAME12manglingInstance extends Truffle.ContractInstance {
  works(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
}
