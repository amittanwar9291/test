import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { SummaryApiModel } from '@models/headCT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/headCT/ui/summary/summary-ui.model';
import { SummaryMapper } from '@mappings/headCT/summary/summary-mapper';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
