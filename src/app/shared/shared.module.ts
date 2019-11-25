import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
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
  declarations: [],
  imports: [CommonModule],
  exports: [
    FormsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,

    MatFormFieldModule
  ]
})
export class SharedModule {}
