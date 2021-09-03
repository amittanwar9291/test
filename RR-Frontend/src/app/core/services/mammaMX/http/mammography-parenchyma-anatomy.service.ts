import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { MammographyParenchymaAnatomyUiModel } from '@models/mammaMX/ui/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy-ui.model';
import { MammographyParenchymaAnatomyApiModel } from '@models/mammaMX/api/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy-api.model';
import { MammographyParenchymaAnatomyMapper } from '@mappings/mammaMX/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy.mapper';
import { Observable } from 'rxjs/internal/Observable';

import { of } from 'rxjs/internal/observable/of';
import { Guid } from '@models/shared/guid/guid';

@Injectable({
  providedIn: 'root'
})
export class MammographyParenchymaAnatomyService extends BaseHttpService<
  MammographyParenchymaAnatomyApiModel,
  MammographyParenchymaAnatomyUiModel,
  MammographyParenchymaAnatomyMapper
> {
  constructor(httpClient: HttpClient, mapper: MammographyParenchymaAnatomyMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.mammographyParenchymaAnatomy],
      httpClient,
      mapper,
      MammographyParenchymaAnatomyApiModel,
      MammographyParenchymaAnatomyUiModel,
      logger
    );
  }
}
