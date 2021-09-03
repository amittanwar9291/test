import { ReportUiModel } from '@models/shared/report/report-ui.model';
import { Observable, of } from 'rxjs';
import { HttpParams, HttpHeaders } from '@angular/common/http/http';
import { delay } from 'rxjs/operators';
import { IHttpService } from '@interfaces/http-service.interface';
import { ReportPatientUiModel } from '../../../../../models/shared/report/report-patient-ui.model';
import { PatientUiModel } from '../../../../../models/shared/patient/patient-ui.model';

export class MockReportService implements IHttpService {
  private report: ReportUiModel;
  private reportWithPatient: ReportPatientUiModel;
  private getDelay: number;
  private saveDelay: number;

  constructor() {
    this.report = new ReportUiModel();

    this.getDelay = 0;
    this.saveDelay = 0;
  }

  setReport(report: ReportUiModel) {
    this.report = report;
  }

  saveDelayDelay(saveDelay: number) {
    this.saveDelay = saveDelay;
  }

  setGetDelay(getDelay: number) {
    this.getDelay = getDelay;
  }

  get(id: string, params?: HttpParams): Observable<ReportUiModel> {
    this.report.id = id;

    return of(this.report).pipe(delay(this.getDelay));
  }

  getWithPatient(id: any): Observable<ReportPatientUiModel> {
    this.reportWithPatient = {
      report: this.report,
      patient: new PatientUiModel()
    };

    return of(this.reportWithPatient).pipe(delay(this.getDelay));
  }

  post(model: ReportUiModel, headers?: HttpHeaders): Observable<ReportUiModel> {
    this.report = model;
    this.report.id = '00000000-0000-0000-0000-000000000099';

    return of(this.report).pipe(delay(this.saveDelay));
  }

  update(model: ReportUiModel, headers?: HttpHeaders): Observable<ReportUiModel> {
    this.report = model;

    return of(model).pipe(delay(this.saveDelay));
  }

  delete(id: string): Observable<ReportUiModel> {
    console.warn('NOT IMPLEMENTED!');

    return of(null);
  }

  setRoute(moduleName: string) {
    this.report.examinationType = moduleName;
  }
}
