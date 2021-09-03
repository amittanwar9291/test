import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { FindingsVentriclesApiModel } from '@models/cardioMRT/api/findings-ventricles/findings-ventricles-api.model';
import { FindingsVentriclesUiModel } from '@models/cardioMRT/ui/findings-ventricles/findings-ventricles-ui.model';

import { FindingsVentriclesMapper } from '@mappings/cardioMRT/findings-ventricles/findings-ventricles.mapper';

@Injectable({
  providedIn: 'root'
})
export class FindingsVentriclesHttpService extends BaseHttpService<
  FindingsVentriclesApiModel,
  FindingsVentriclesUiModel,
  FindingsVentriclesMapper
> {
  constructor(httpClient: HttpClient, mapper: FindingsVentriclesMapper, logger: LoggingService) {
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.cardioMrtConfig.findingsVentricles.http],
      httpClient,
      mapper,
      FindingsVentriclesApiModel,
      FindingsVentriclesUiModel,
      logger
    );
  }
}
