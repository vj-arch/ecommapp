import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddamountComponent } from "./addamount/addamount.component";
import { AlltransactionComponent } from "./alltransaction/alltransaction.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TransferamountComponent } from "./transferamount/transferamount.component";

import { WalletRoutingModule } from "./wallet-routing.module";
import { WalletComponent } from "./wallet.component";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import {
  MatMenuModule,
  MatIconModule,
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTableModule
} from "@angular/material";

@NgModule({
  declarations: [
    AddamountComponent,
    AlltransactionComponent,
    DashboardComponent,
    TransferamountComponent,
    WalletComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
    WalletRoutingModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class WalletModule {}
