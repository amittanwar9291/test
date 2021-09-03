import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { PericardiumVesselsUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-ui.model';
import { PericardiumVesselsApiModel } from '@models/cardioMRT/api/pericardium-vessels/pericardium-vessels-api.model';

import { PericardiumVesselsMapper } from '@mappings/cardioMRT/pericardium-vessels/pericardium-vessels.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class PericardiumVesselsHttpService extends BaseHttpService<
  PericardiumVesselsApiModel,
  PericardiumVesselsUiModel,
  PericardiumVesselsMapper
> {
  constructor(httpClient: HttpClient, mapper: PericardiumVesselsMapper, logger: LoggingService) {
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.cardioMrtConfig.pericardiumVessels],
      httpClient,
      mapper,
      PericardiumVesselsApiModel,
      PericardiumVesselsUiModel,
      logger
    );
  }
}
