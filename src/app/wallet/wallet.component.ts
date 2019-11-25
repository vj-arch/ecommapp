import { Component, OnInit } from "@angular/core";
import { WalletServiceService } from "../shared/wallet-service.service";
import { AuthserviceService } from "../shared/authservice.service";
import { Transaction } from "../shared/Models/transaction.model";
import { Observable, Subscription } from "rxjs";
import { Logs } from "../shared/Models/logs.model";
import { User } from "../shared/Models/user.model";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.css"]
})
export class WalletComponent implements OnInit {
  constructor(
    private wallet: WalletServiceService,
    private auth: AuthserviceService
  ) {}

  public log: Logs[] = [];
  public trans: Transaction[] = [];
  private walletSub: Subscription;
  private logedUserSub: Subscription;
  wallet_bal: number = 0;
  loggedUser: any = 0;
  loggedusername: string = "";
  flag = false;
  user: User[];

  ngOnInit() {
    let data = Number(sessionStorage.getItem("id"));
    console.log("hello", data);
    this.user = this.wallet.getUserData();
    this.log = this.wallet.getuserstats();
    this.logedUserSub = this.wallet
      .userlogListner()
      .subscribe((Log: Logs[]) => {
        this.log = Log;
        Log.forEach(L => {
          if (L.logStatus) {
            this.loggedUser = L.userId;
          }
        });
        this.user.forEach(User => {
          if (this.loggedUser == User.userId) {
            this.flag = true;
            this.loggedusername = User.userName;
          }
        });
      });
    this.walletSub = this.wallet
      .walletupdatelistener()
      .subscribe((w: Transaction[]) => {
        this.trans = w;
        let len = this.trans.length;
        this.wallet_bal = this.trans[len - 1].updatedbalance;
      });
  }
}
