import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { PeritonealCavityApiModel } from '@models/abdomenMRT/api/peritoneal-cavity/peritoneal-cavity-api.model';
import { PeritonealCavityUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-ui.model';
import { PeritonealCavityMapper } from '@mappings/abdomenMRT/peritoneal-cavity/peritoneal-cavity.mapper';

@Injectable({
  providedIn: 'root'
})
export class PeritonealCavityHttpService extends BaseHttpService<
  PeritonealCavityApiModel,
  PeritonealCavityUiModel,
  PeritonealCavityMapper
> {
  constructor(httpClient: HttpClient, mapper: PeritonealCavityMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.peritonealCavity.http],
      httpClient,
      mapper,
      PeritonealCavityApiModel,
      PeritonealCavityUiModel,
      logger
    );
  }
}
