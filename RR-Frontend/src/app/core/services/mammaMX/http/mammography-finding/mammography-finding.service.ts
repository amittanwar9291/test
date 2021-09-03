import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { MammographyFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-ui.model';
import { MammographyFindingApiModel } from '@models/mammaMX/api/mammography-finding/mammography-finding-api.model';
import { MammographyFindingMapper } from '@mappings/mammaMX/mammography-finding/mammography-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class MammographyFindingService extends BaseHttpService<
  MammographyFindingApiModel,
  MammographyFindingUiModel,
  MammographyFindingMapper
> {
  constructor(httpClient: HttpClient, mapper: MammographyFindingMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.mammographyFinding.http],
      httpClient,
      mapper,
      MammographyFindingApiModel,
      MammographyFindingUiModel,
      logger
    );
  }
}
