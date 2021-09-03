import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SoftTissuesMapper } from '@mappings/spineMRT/soft-tissues/soft-tissues.mapper';

import { SoftTissuesApiModel } from '@models/spineMRT/api/soft-tissues/soft-tissues-api.model';
import { SoftTissuesUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { Observable, of } from 'rxjs';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesHttpService extends BaseHttpService<SoftTissuesApiModel, SoftTissuesUiModel, SoftTissuesMapper> {
  constructor(httpClient: HttpClient, mapper: SoftTissuesMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.softTissues.http],
      httpClient,
      mapper,
      SoftTissuesApiModel,
      SoftTissuesUiModel,
      logger
    );
  }
}
