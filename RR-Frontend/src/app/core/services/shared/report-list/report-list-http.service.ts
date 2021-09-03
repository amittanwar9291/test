import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ReportPatientMapper } from '@mappings/shared/report/report-patient.mapper';
import { AppConfig } from 'app/app.config';
import { ReportListApiModel } from '@models/shared/report/report-list-api.model';
import { ReportListOptionsUiModel } from '@models/shared/report-list/report-list-options-ui.model';
import { ReportListItemUiModel } from '@models/shared/report/report-list-item-ui.model';
import { ReportListItemApiModel } from '@models/shared/report/report-list-item-api.model';
import { AdapterBase } from '@abstractions/service-adapter/adapter-base';
import { ReportListItemMapper } from '@mappings/shared/report-list/report-list-item.mapper';
import { ReportListUiModel } from '@models/shared/report/report-list-ui.model';
import { ReportListOptionsMapper } from '@mappings/shared/report-list/report-list-options.mapper';
import { ReportListOptionsApiModel } from '@models/shared/report-list/report-list-options-api.model';

@Injectable({
  providedIn: 'root'
})
export class ReportListHttpService {
  private route = AppConfig.settings.baseUrl + '/' + AppConfig.settings.coreReportListUrl;
  private adapter: AdapterBase<ReportListItemApiModel, ReportListItemUiModel, ReportListItemMapper>;

  constructor(
    private httpClient: HttpClient,
    private reportListItemMapper: ReportListItemMapper,
    private reportPatientMapper: ReportPatientMapper,
    private reportListOptionsMapper: ReportListOptionsMapper
  ) {
    this.adapter = new AdapterBase<ReportListItemApiModel, ReportListItemUiModel, ReportListItemMapper>(
      reportListItemMapper,
      ReportListItemApiModel,
      ReportListItemUiModel
    );
  }

  public post(uiModel: ReportListItemUiModel): Observable<ReportListItemUiModel> {
    const apiModel = this.adapter.adaptToAPI(uiModel);

    return this.httpClient.post<ReportListItemApiModel>(this.route, apiModel).pipe(map(item => this.adapter.adaptToUI(item)));
  }

  public getReportsWithPatient(options: ReportListOptionsUiModel): Observable<ReportListUiModel> {
    const apiModel = this.reportListOptionsMapper.mapToAPI(options, new ReportListOptionsApiModel());

    return this.httpClient.post<ReportListApiModel>(this.route + '/Patient', apiModel).pipe(
      map(out => {
        const reportPatientList = out.reportPatientList.map(report => this.reportPatientMapper.mapToUI(report));
        const reportListOptions = this.reportListOptionsMapper.mapToUI(out.reportListOptions, new ReportListOptionsUiModel());

        return {
          reportPatientList,
          reportListOptions
        };
      })
    );
  }
}
