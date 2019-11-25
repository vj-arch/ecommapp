import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authToken = "Auth Header set";
    const authReq = request.clone({
      setHeaders: {
        Authorization: authToken
      }
    });

    return next.handle(authReq);
  }
}
