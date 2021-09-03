import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { SummaryApiModel } from '@models/elbowMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/elbowMRT/ui/summary/summary-ui.model';
import { SummaryMapper } from '@mappings/elbowMRT/summary/summary.mapper';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.elbowMrtConfig.localBaseURL, AppConfig.elbowMrtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
