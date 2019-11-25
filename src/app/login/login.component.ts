import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../shared/Models/user.model";
import { WalletServiceService } from "../shared/wallet-service.service";
import { AuthserviceService } from "../shared/authservice.service";
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private wallet: WalletServiceService,
    private auth: AuthserviceService,
    private router: Router
  ) {}

  userdata: User[] = [];
  user: User[] = [];
  username: any;
  password: any;
  flag: number = 0;

  addnewpost(form: NgForm) {
    let log = 0;
    this.user = this.wallet.getUserData();
    this.username = form.value.username;
    this.password = form.value.password;
    let loggeduser;

    for (let i = 0; i < this.user.length; i++) {
      let userI = this.user[i];
      console.log(userI);
      if (this.username == userI.userName && this.password == userI.password) {
        //this.router.navigate(["/dashboard"]);
        loggeduser = userI.userId;
        log = 1;
        break;
        console.log("Logged In");
      } else {
        this.flag = 1;
      }
    }
    if (log) {
      this.auth.loggedIn(true, loggeduser);
      sessionStorage.setItem("id", loggeduser);
      this.wallet.userlogstats();
      this.router.navigate(["/wallet"]);
    } else {
      this.auth.loggedIn(false, loggeduser);
    }
  }

  ngOnInit() {
    this.userdata = this.wallet.getUserData();
    console.log(typeof NaN);
  }
}
