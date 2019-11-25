import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "wallet",
    loadChildren: "./wallet/wallet.module#WalletModule",
    canActivate: [AuthGuard]
  },
  { path: "", loadChildren: "./login/login.module#LoginModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
