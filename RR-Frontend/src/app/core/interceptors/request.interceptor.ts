import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, switchMap, take, filter } from 'rxjs/operators';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { AppConfig } from '../../app.config';
import { TokenService } from '@services/shared/token/token.service';
import { LoginHttpService } from '@services/shared/login/login-http.service';
import { Router } from '@angular/router';
import { AuthResponse } from '@models/shared/login/auth-response';
import { LogoutService } from '@services/shared/logout/logout.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private toastMessageService: ToastMessageService,
    private router: Router,
    private tokenService: TokenService,
    private loginHttpService: LoginHttpService,
    private logoutService: LogoutService,
    private userBasicDataService: UserBasicDataService
  ) {}

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    request = this.setAuthHeader(request);
    return handler.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error, request, handler);
      })
    );
  }

  private setAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
    const authToken = this.tokenService.getTokenFromStorage();

    if (this.isHttp(request) && this.isSignInWithClientToken(request) && this.tokenService.getClientToken()) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.tokenService.getClientToken()}`)
      });
    }
    if (!!authToken && this.isHttp(request) && !this.isAuthorizationRequest(request)) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken.accessToken}`)
      });
    }
    if (!!authToken && this.isHttp(request) && this.isTokenRefreshRequest(request)) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken.refreshToken}`)
      });
    }

    return request;
  }

  private handleError(error: HttpErrorResponse, request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    if (error.status === 401 && !this.isSignInWithClientToken(request)) {
      return this.handleUnauthorizedError(error, request, handler);
    } else if (error.status === 403) {
      return this.handleForbiddenError(request, handler);
    } else if (error.status === 409) {
      return this.handleConflictError(error, request, handler);
    } else {
      return this.handleOtherErrors(error);
    }
  }

  handleUnauthorizedError(error: HttpErrorResponse, request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isAuthorizationRequest(request)) {
      return this.handleTokenRefresh(request, handler);
    } else if (this.isTokenRefreshRequest(request)) {
      return this.handleRefreshError(error);
    } else {
      return new Observable(subscriber => subscriber.error(error));
    }
  }

  private handleForbiddenError(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    this.toastMessageService.showErrorToast('errors.authorisation.forbidden');
    return handler.handle(request);
  }

  private handleConflictError(error: HttpErrorResponse, request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    this.router.navigate(['/']).then(_ => this.toastMessageService.showErrorToast(error.error.message));
    return handler.handle(request);
  }

  private handleOtherErrors(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    if (error.error?.message) {
      this.toastMessageService.showErrorToast(error.error.message);
    } else {
      this.toastMessageService.showHttpError(error);
    }
    return new Observable(subscriber => subscriber.error(error));
  }

  private handleTokenRefresh(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      request = this.setAuthHeader(request);
      return this.loginHttpService.refreshToken(this.tokenService.hasClientToken()).pipe(
        switchMap((token: AuthResponse) => {
          this.isRefreshing = false;
          if (token) {
            this.tokenService.setTokenInStorage(token);
            this.refreshTokenSubject.next(token);
          }
          return handler.handle(this.setAuthHeader(request));
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(() => {
          return handler.handle(this.setAuthHeader(request));
        })
      );
    }
  }

  private handleRefreshError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.toastMessageService.showErrorToast('errors.authorisation.expired');
    this.userBasicDataService.userData.next(null);
    this.tokenService.clearTokenInStorage();
    this.router.navigate(['/login']);
    return new Observable(subscriber => subscriber.error(error));
  }

  private isSignInRequest(request: HttpRequest<any>): boolean {
    return request.url.toLowerCase().includes(AppConfig.settings.auth.signIn.toLowerCase());
  }

  private isSignInWithClientToken(request: HttpRequest<any>): boolean {
    return request.url.toLowerCase().includes(AppConfig.settings.auth.clientToken.toLowerCase());
  }

  private isTokenRefreshRequest(request: HttpRequest<any>): boolean {
    return request.url.toLowerCase().includes(AppConfig.settings.auth.refreshToken.toLowerCase());
  }

  private isAuthorizationRequest(request: HttpRequest<any>): boolean {
    return this.isSignInRequest(request) || this.isTokenRefreshRequest(request);
  }

  private isHttp(request: HttpRequest<any>): boolean {
    return request.url.startsWith('http');
  }
}
