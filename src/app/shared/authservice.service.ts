import { Injectable } from "@angular/core";
import { User } from "./Models/user.model";
import { WalletServiceService } from "./wallet-service.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthserviceService {
  constructor(private wallet: WalletServiceService) {}

  user: User[] = this.wallet.user;
  logs: any = false;
  loggedUserId: any = 0;

  loggedIn(log: any, id: any) {
    if (log) {
      console.log("from authservice logged in");
      this.loggedUserId = id;

      this.logs = true;
    } else {
      console.log("not logged in");
      this.logs = false;
    }
    // console.log(this.user);
  }

  authGuardLogRequest() {
    if (this.logs) return true;
    else return false;
  }
}
