import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { NgForm } from "@angular/forms";
import { WalletServiceService } from "../../shared/wallet-service.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-addamount",
  templateUrl: "./addamount.component.html",
  styleUrls: ["./addamount.component.css"]
})
export class AddamountComponent implements OnInit {
  money: number = 0;

  constructor(
    private wallet: WalletServiceService,
    private router: ActivatedRoute
  ) {}

  addnewpost(form: NgForm) {
    this.wallet.addmoney(form.value.money);
  }
  ngOnInit() {
    let data = Number(sessionStorage.getItem("id"));
    console.log("hello", data);
  }
}
