import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { ProstateMapper } from '@mappings/pelvisMRT/prostate/prostate.mapper';

import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';
import { ProstateApiModel } from '@models/pelvisMRT/api/prostate/prostate-api.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Guid } from '@models/shared/guid/guid';

@Injectable({
  providedIn: 'root'
})
export class ProstateHttpService extends BaseHttpService<ProstateApiModel, ProstateUiModel, ProstateMapper> {
  constructor(httpClient: HttpClient, mapper: ProstateMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.prostata],
      httpClient,
      mapper,
      ProstateApiModel,
      ProstateUiModel,
      logger
    );
  }
}
