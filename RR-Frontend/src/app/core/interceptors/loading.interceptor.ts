import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingScreenService } from '@services/shared/loading-screen/loading-screen.service';

@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {
  // URLs for which the loading screen should not be enabled
  skippUrls = ['/Report/ImportReport', '/Core/InstituteManager/Settings/GetDicomMap'];

  constructor(private loadingScreenService: LoadingScreenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let displayLoadingScreen = true;

    if (request.headers.get('autosave') === 'true') {
      return next.handle(request);
    }

    displayLoadingScreen = !this.skippUrls.some(url => new RegExp(url).test(request.url));
    if (displayLoadingScreen) {
      this.loadingScreenService.startLoading();

      return next.handle(request).pipe(finalize(() => this.loadingScreenService.stopLoading()));
    } else {
      return next.handle(request);
    }
  }
}
