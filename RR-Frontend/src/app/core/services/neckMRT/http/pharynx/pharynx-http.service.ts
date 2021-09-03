import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';
import { AppConfig } from 'app/app.config';
import { PharynxApiModel } from '@models/neckMRT/api/pharynx/pharynx-api.model';
import { PharynxUiModel } from '@models/neckMRT/ui/pharynx/pharynx-ui.model';
import { PharynxMapper } from '@mappings/neckMRT/pharynx/pharynx.mapper';

@Injectable({
  providedIn: 'root'
})
export class PharynxHttpService extends BaseHttpService<PharynxApiModel, PharynxUiModel, PharynxMapper> {
  constructor(httpClient: HttpClient, mapper: PharynxMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.pharynx.http],
      httpClient,
      mapper,
      PharynxApiModel,
      PharynxUiModel,
      logger
    );
  }
}
