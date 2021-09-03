import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { LungParenchymaApiModel } from '@models/thoraxMRT/api/lung-parenchyma/lung-parenchyma-api.model';
import { LungParenchymaUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { LungParenchymaMapper } from '@mappings/thoraxMRT/lung-parenchyma/lung-parenchyma.mapper';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaHttpService extends BaseHttpService<LungParenchymaApiModel, LungParenchymaUiModel, LungParenchymaMapper> {
  constructor(httpClient: HttpClient, mapper: LungParenchymaMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxMrtConfig.localBaseURL, AppConfig.thoraxMrtConfig.lungParenchyma],
      httpClient,
      mapper,
      LungParenchymaApiModel,
      LungParenchymaUiModel,
      logger
    );
  }
}
