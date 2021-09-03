import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { MaleSexMapper } from '@mappings/pelvisMRT/male-sex/male-sex.mapper';

import { MaleSexUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-ui.model';
import { MaleSexApiModel } from '@models/pelvisMRT/api/male-sex/male-sex-api.model';

@Injectable({
  providedIn: 'root'
})
export class MaleSexHttpService extends BaseHttpService<MaleSexApiModel, MaleSexUiModel, MaleSexMapper> {
  constructor(httpClient: HttpClient, mapper: MaleSexMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.maleGender.http],
      httpClient,
      mapper,
      MaleSexApiModel,
      MaleSexUiModel,
      logger
    );
  }
}
