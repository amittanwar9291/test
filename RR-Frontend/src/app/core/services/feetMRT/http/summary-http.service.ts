import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { SummaryUiModel } from '@models/feetMRT/ui/summary/summary-ui.model';
import { SummaryApiModel } from '@models/feetMRT/api/summary/summary-api.model';
import { SummaryMapper } from '@mappings/feetMRT/summary/summary.mapper';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.feetMrtConfig.localBaseURL, AppConfig.feetMrtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
