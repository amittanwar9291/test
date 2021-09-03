import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { FacialSkullApiModel } from '@models/headCT/api/facial-skull/facial-skull-api.model';
import { FacialSkullUiModel } from '@models/headCT/ui/facial-skull/facial-skull-ui.model';
import { FacialSkullMapper } from '@mappings/headCT/facial-skull/facial-skull-mapper';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullHttpService extends BaseHttpService<FacialSkullApiModel, FacialSkullUiModel, FacialSkullMapper> {
  constructor(httpClient: HttpClient, mapper: FacialSkullMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.facialSkull],
      httpClient,
      mapper,
      FacialSkullApiModel,
      FacialSkullUiModel,
      logger
    );
  }
}
