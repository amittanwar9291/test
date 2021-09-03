import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { AreaOfInvestigationMapper } from '@mappings/abdomenCT/area-of-investigation/area-of-investigation.mapper';
import { AreaOfInvestigationUiModel } from '@models/abdomenCT/ui/area-of-investigation/area-of-investigation-ui.model';
import { AreaOfInvestigationApiModel } from '@models/abdomenCT/api/area-of-investigation/area-of-investigation-api.model';

@Injectable({
  providedIn: 'root'
})
export class AreaOfInvestigationHttpService extends BaseHttpService<
  AreaOfInvestigationApiModel,
  AreaOfInvestigationUiModel,
  AreaOfInvestigationMapper
> {
  constructor(httpClient: HttpClient, mapper: AreaOfInvestigationMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenCtConfig.localBaseURL, AppConfig.abdomenCtConfig.areaOfInvestigation],
      httpClient,
      mapper,
      AreaOfInvestigationApiModel,
      AreaOfInvestigationUiModel,
      logger
    );
  }
}
