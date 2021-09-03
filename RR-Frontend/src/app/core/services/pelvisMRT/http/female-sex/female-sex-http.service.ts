import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';
import { FemaleSexApiModel } from '@models/pelvisMRT/api/female-sex/female-sex-api.model';
import { FemaleSexUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-ui.model';
import { FemaleSexMapper } from '@mappings/pelvisMRT/female-sex/female-sex.mapper';

@Injectable({
  providedIn: 'root'
})
export class FemaleSexHttpService extends BaseHttpService<FemaleSexApiModel, FemaleSexUiModel, FemaleSexMapper> {
  constructor(httpClient: HttpClient, mapper: FemaleSexMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.femaleGender.http],
      httpClient,
      mapper,
      FemaleSexApiModel,
      FemaleSexUiModel,
      logger
    );
  }
}
