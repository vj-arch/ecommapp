import { Transaction } from "./transaction.model";
export interface Wallet {
  walletId: number;
  transaction: Transaction[];
}
