import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddamountComponent } from "./addamount/addamount.component";
import { AlltransactionComponent } from "./alltransaction/alltransaction.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TransferamountComponent } from "./transferamount/transferamount.component";
//import { AuthGuard } from "../auth.guard";
import { WalletComponent } from "./wallet.component";
import { WalletModule } from "./wallet.module";

const routes: Routes = [
  {
    path: "",
    component: WalletComponent,

    children: [
      {
        path: "alltransaction",
        component: AlltransactionComponent
        // canActivate: [AuthGuard]
      },
      {
        path: "add",
        component: AddamountComponent
      },
      { path: "", component: DashboardComponent },
      {
        path: "transfer",
        component: TransferamountComponent
        //    canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {}
