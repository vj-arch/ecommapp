import { Component, OnInit } from "@angular/core";
import { Wallet } from "../../shared/Models/wallet.model";
import { Transaction } from "../../shared/Models/transaction.model";
import { WalletServiceService } from "../../shared/wallet-service.service";
import { NgModule } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../../shared/Models/user.model";

@Component({
  selector: "app-transferamount",
  templateUrl: "./transferamount.component.html",
  styleUrls: ["./transferamount.component.css"]
})
export class TransferamountComponent implements OnInit {
  constructor(private walletS: WalletServiceService) {}

  username: string = "";
  touser: string = "";
  amount: number = 0;
  date: Date = new Date();
  walletT: Wallet[] = [
    {
      walletId: 1,
      transaction: [
        {
          date: this.date,
          time: "",
          balance: 0,
          updatedbalance: 20,
          operation: "empty"
        },
        {
          date: this.date,
          time: "",
          balance: 20,
          updatedbalance: 30,
          operation: "empty"
        }
      ]
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
  walletofReceiver: Wallet[] = [];
  walletofSender: Wallet[] = [];

  user: User[] = [];

  addTransferTransaction(form: NgForm) {
    // this.walletT = [];
    console.log("Service call from Component");

    console.log("data from service");
    console.log(this.walletT);
    let Ruserid;
    let FRusername = form.value.touser;
    let FSuserId = Number(sessionStorage.getItem("id"));

    // Finding the rece iver User ID
    this.user.forEach(UserD => {
      if (FRusername == UserD.userName) {
        Ruserid = UserD.userId;
        this.walletofReceiver = this.walletT.filter(W => Ruserid == W.walletId);
      }
    });

    let trans = this.walletofReceiver[0].transaction;
    let d = this.date.toDateString();
    let t = this.date.toLocaleTimeString();
    let len = trans.length;
    let Bal = trans[len - 1].updatedbalance;
    let Up = Bal + form.value.amount;
    let operation = "Credit";

    //this.display_balance = Up;
    console.log("Before Push");
    console.log(this.walletT);
    trans.push({
      date: d,
      time: t,
      balance: Bal,
      updatedbalance: Up,
      operation: operation
    });
    console.log("After Push");
    console.log(this.walletT);
    //  console.log("Stran" + STrans);
    console.log(this.walletofReceiver[0].transaction);
    /*this.walletT[FSuserId - 1].transaction.push({
      date: d,
      time: t,
      balance: STrans[0].updatedbalance,
      updatedbalance: STrans[0].updatedbalance - form.value.amount,
      operation: "Debit"
    });
    //console.log(this.wallet[FSuserId - 1].transaction);*/
  }

  ngOnInit() {
    //this.wallet = this.walletS.getWalletDetails();
    this.user = this.walletS.getUserData();
  }
}
