import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';
import { SummaryApiModel } from '@models/angiographyCT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/angiographyCT/ui/summary/summary-ui.model';
import { SummaryMapper } from '@mappings/angiographyCT/summary/summary.mapper';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
