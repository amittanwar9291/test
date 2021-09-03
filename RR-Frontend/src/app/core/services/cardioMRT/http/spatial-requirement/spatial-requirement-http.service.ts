import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpatialRequirementMapper } from '@mappings/cardioMRT/spatial-requirement/spatial-requirement.mapper';

import { SpatialRequirementApiModel } from '@models/cardioMRT/api/spatial-requirement/spatial-requirement-api.model';
import { SpatialRequirementUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: max-line-length
export class SpatialRequirementHttpService extends BaseHttpService<
  SpatialRequirementApiModel,
  SpatialRequirementUiModel,
  SpatialRequirementMapper
> {
  constructor(httpClient: HttpClient, mapper: SpatialRequirementMapper, logger: LoggingService) {
    // tslint:disable-next-line: max-line-length
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.cardioMrtConfig.spatialRequirement.http],
      httpClient,
      mapper,
      SpatialRequirementApiModel,
      SpatialRequirementUiModel,
      logger
    );
  }
}
