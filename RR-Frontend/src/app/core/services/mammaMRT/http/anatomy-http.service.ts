import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IHttpService } from '@interfaces/http-service.interface';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AnatomyApiModel } from '@models/mammaMRT/api/anatomy/anatomy-api.model';
import { AnatomyUiModel } from '@models/mammaMRT/ui/anatomy/anatomy-ui.model';

import { AnatomyMapper } from '@mappings/mammaMRT/anatomy.mapper';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AnatomyHttpService extends BaseHttpService<AnatomyApiModel, AnatomyUiModel, AnatomyMapper> implements IHttpService {
  constructor(httpClient: HttpClient, mapper: AnatomyMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.anatomy],
      httpClient,
      mapper,
      AnatomyApiModel,
      AnatomyUiModel,
      logger
    );
  }
}
