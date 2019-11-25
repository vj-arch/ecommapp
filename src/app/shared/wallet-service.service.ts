import { Injectable } from "@angular/core";
import { Transaction } from "./Models/transaction.model";
import { Logs } from "./Models/logs.model";
import { User } from "./Models/user.model";
import { Wallet } from "./Models/wallet.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WalletServiceService {
  constructor() {}

  date: Date = new Date();
  display_balance: number = 0;

  public user: User[] = [
    { userId: 1, userName: "XYZ", walletId: 1, password: "1234" },
    { userId: 2, userName: "XYZ2", walletId: 2, password: "3578" },
    { userId: 3, userName: "XYZ3", walletId: 3, password: "9517" }
  ];
  public log: Logs[] = [
    {
      userId: 1,
      logStatus: false
    },
    {
      userId: 2,
      logStatus: false
    },
    {
      userId: 3,
      logStatus: false
    }
  ];
  public trans: Transaction[] = [
    {
      date: this.date,
      time: "",
      balance: 0,
      updatedbalance: 0,
      operation: "empty"
    }
  ];
  sendWallet: Wallet[] = [];
  private wallet: Wallet[] = [
    {
      walletId: 1,
      transaction: this.trans
    },
    {
      walletId: 2,
      transaction: [
        {
          date: this.date,
          time: "",
          balance: 0,
          updatedbalance: 0,
          operation: "empty"
        }
      ]
    },
    {
      walletId: 3,
      transaction: [
        {
          date: this.date,
          time: "",
          balance: 0,
          updatedbalance: 0,
          operation: "empty"
        }
      ]
    }
  ];

  private walletUpdate = new Subject<Transaction[]>();
  private userupdate = new Subject<Logs[]>();

  walletupdatelistener() {
    return this.walletUpdate.asObservable();
  }

  getBalance() {
    return this.display_balance;
  }

  gretTransactions() {
    return [...this.trans];
  }

  addmoney(money: number) {
    console.log("money added");
    let data = Number(sessionStorage.getItem("id"));
    let d = this.date.toDateString();
    let t = this.date.toLocaleTimeString();
    let len = this.trans.length;
    let Bal = this.trans[len - 1].updatedbalance;
    let Up = Bal + money;
    let operation = "Credit";

    this.trans.push({
      date: d,
      time: t,
      balance: Bal,
      updatedbalance: Up,
      operation: operation
    });
    this.display_balance = Up;
    this.walletUpdate.next([...this.trans]);
  }

  //User Data management section

  getUserData() {
    return this.user;
  }

  // user logged stats
  getuserstats() {
    return [...this.log];
  }
  userlogListner() {
    return this.userupdate.asObservable();
  }
  userlogstats() {
    let data = Number(sessionStorage.getItem("id"));
    this.log.forEach(u => {
      if (u.userId == data) {
        u.logStatus = true;
      }
    });
    this.userupdate.next([...this.log]);
  }

  // Transfer amount Section

  getWalletDetails() {
    console.log("Sending Data....");
    console.log(this.wallet);
    this.sendWallet = this.wallet;
    console.log(this.sendWallet);
    return this.sendWallet;
  }
}
