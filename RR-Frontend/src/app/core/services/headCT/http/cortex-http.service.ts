import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { CortexApiModel } from '@models/headCT/api/cortex/cortex-api.model';
import { CortexUiModel } from '@models/headCT/ui/cortex/cortex-ui.model';
import { CortexMapper } from '@mappings/headCT/cortex/cortex.mapper';

@Injectable({
  providedIn: 'root'
})
export class CortexHttpService extends BaseHttpService<CortexApiModel, CortexUiModel, CortexMapper> {
  constructor(httpClient: HttpClient, mapper: CortexMapper, logger: LoggingService) {
    super([AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.cortex], httpClient, mapper, CortexApiModel, CortexUiModel, logger);
  }
}
