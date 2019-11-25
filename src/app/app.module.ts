import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthGuard } from "./auth.guard";
import { AuthserviceService } from "./shared/authservice.service";
import { AuthInterceptor } from "./auth-interceptor";

import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./ngrxstore/reducers/tutorial.reducer";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CreateComponent } from "./ngrxstore/create/create.component";
import { ReadComponent } from "./ngrxstore/read/read.component";
//import { RemoveComponent } from './ngrxstore/remove/remove.component';

@NgModule({
  declarations: [AppComponent, CreateComponent, ReadComponent],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],

  providers: [
    AuthserviceService,
    AuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
