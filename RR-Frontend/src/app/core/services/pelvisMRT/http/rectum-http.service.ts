import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { RectumMapper } from '@mappings/pelvisMRT/rectum/rectum.mapper';

import { RectumUiModel } from '@models/pelvisMRT/ui/rectum/rectum-ui.model';
import { RectumApiModel } from '@models/pelvisMRT/api/rectum/rectum-api.model';
import { Observable, of } from 'rxjs';
import { Guid } from '@models/shared/guid/guid';

@Injectable({
  providedIn: 'root'
})
export class RectumHttpService extends BaseHttpService<RectumApiModel, RectumUiModel, RectumMapper> {
  constructor(httpClient: HttpClient, mapper: RectumMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.rectum],
      httpClient,
      mapper,
      RectumApiModel,
      RectumUiModel,
      logger
    );
  }
}
