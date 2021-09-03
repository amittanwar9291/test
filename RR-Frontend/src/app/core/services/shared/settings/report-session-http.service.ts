import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReportSessionMapper } from '@mappings/shared/settings/report-session.mapper';
import { Observable } from 'rxjs';
import { ReportSessionUiModel } from '@models/shared/settings/report-session-ui.model';
import { ReportSessionApiModel } from '@models/shared/settings/report-session-api.model';
import { AppConfig } from '../../../../app.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportSessionHttpService {
  constructor(private http: HttpClient, private reportSessionMapper: ReportSessionMapper) {}

  get baseUrl() {
    return `${AppConfig.settings.baseUrl}/${AppConfig.settings.instituteManager.settings}`;
  }

  getReportSessions(): Observable<ReportSessionUiModel[]> {
    return this.http
      .get<ReportSessionApiModel[]>(`${this.baseUrl}/ReportSessions`)
      .pipe(map(sessions => sessions.map(session => this.reportSessionMapper.mapToUI(session))));
  }

  removeReportSession(reportId: string, moduleName: string): Observable<any> {
    const params = new HttpParams().append('reportId', reportId).append('moduleName', moduleName);

    return this.http.delete<any>(`${this.baseUrl}/ReportSession`, { params });
  }

  removeAllReportSessions(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/ReportSessions`);
  }
}
