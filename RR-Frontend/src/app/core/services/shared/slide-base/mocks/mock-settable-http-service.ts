import { HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { IHttpService } from '@interfaces/http-service.interface';
import { IReport } from '@interfaces/report.interface';
import { slideBaseTestConsts } from './test-const';

export class MockSettableHttpService implements IHttpService {
  private mockModel: IReport;
  private delayTime = 0;

  setModel(model: IReport) {
    this.mockModel = model;
  }

  setDelay(delayIn: number) {
    this.delayTime = delayIn;
  }

  get(id: string, params?: HttpParams): Observable<IReport> {
    return of(this.mockModel).pipe(delay(this.delayTime));
  }

  post(model: IReport, headers?: HttpHeaders): Observable<IReport> {
    this.mockModel = model;
    this.mockModel.id = slideBaseTestConsts.pagePostId;
    return of(this.mockModel).pipe(delay(this.delayTime));
  }

  update(model: IReport, headers?: HttpHeaders): Observable<IReport> {
    this.mockModel = model;

    return of(this.mockModel).pipe(delay(this.delayTime));
  }

  delete(id: string): Observable<IReport> {
    return of(this.mockModel).pipe(delay(this.delayTime));
  }
}
