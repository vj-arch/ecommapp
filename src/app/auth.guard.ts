import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthserviceService } from "./shared/authservice.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthserviceService) {}

  canActivate(): boolean {
    if (this.auth.authGuardLogRequest()) {
      // this.router.navigate(["/add"]);
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
