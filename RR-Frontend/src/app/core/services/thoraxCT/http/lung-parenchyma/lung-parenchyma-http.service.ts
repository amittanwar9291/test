import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { LungParenchymaApiModel } from '@models/thoraxCT/api/lung-parenchyma/lung-parenchyma-api.model';
import { LungParenchymaUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-ui.model';

import { LungParenchymaMapper } from '@mappings/thoraxCT/lung-parenchyma/lung-parenchyma.mapper';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaHttpService extends BaseHttpService<LungParenchymaApiModel, LungParenchymaUiModel, LungParenchymaMapper> {
  constructor(httpClient: HttpClient, mapper: LungParenchymaMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.lungParenchyma.http],
      httpClient,
      mapper,
      LungParenchymaApiModel,
      LungParenchymaUiModel,
      logger
    );
  }
}
