import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Transaction } from "../../shared/Models/transaction.model";
import { WalletServiceService } from "../../shared/wallet-service.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-alltransaction",
  templateUrl: "./alltransaction.component.html",
  styleUrls: ["./alltransaction.component.css"]
})
export class AlltransactionComponent implements OnInit {
  private walletSub: Subscription;

  public trans: Transaction[] = [];

  displayedColumns: string[] = [
    "date",
    "time",
    "operation",
    "balance",
    "updatedbalance"
  ];
  //dataSource = ELEMENT_DATA;
  //dataSource = ELEMENT_DATA;

  constructor(private walletService: WalletServiceService) {}

  ngOnInit() {
    this.trans = this.walletService.gretTransactions();
    this.walletSub = this.walletService
      .walletupdatelistener()
      .subscribe((w: any) => {
        this.trans = w;
      });
  }
}
