import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { PelvicFloorApiModel } from '@models/pelvisMRT/api/pelvic-floor/pelvic-floor-api.model';
import { PelvicFloorUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-ui.model';

import { PelvicFloorMapper } from '@mappings/pelvisMRT/pelvic-floor/pelvic-floor.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelvicFloorHttpService extends BaseHttpService<PelvicFloorApiModel, PelvicFloorUiModel, PelvicFloorMapper> {
  constructor(httpClient: HttpClient, mapper: PelvicFloorMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.pelvicFloor],
      httpClient,
      mapper,
      PelvicFloorApiModel,
      PelvicFloorUiModel,
      logger
    );
  }
}
