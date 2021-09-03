import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { CerebrospinalFluidSpaceUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { CerebrospinalFluidSpaceApiModel } from '@models/headMRT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-api.model';
import { CerebrospinalFluidSpaceMapper } from '@mappings/headMRT/cerebrospinal-fluid-space/cerebrospinal-fluid-space.mapper';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpaceHttpService extends BaseHttpService<
  CerebrospinalFluidSpaceApiModel,
  CerebrospinalFluidSpaceUiModel,
  CerebrospinalFluidSpaceMapper
> {
  constructor(httpClient: HttpClient, mapper: CerebrospinalFluidSpaceMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.cerebrospinalFluidSpace.http],
      httpClient,
      mapper,
      CerebrospinalFluidSpaceApiModel,
      CerebrospinalFluidSpaceUiModel,
      logger
    );
  }
}
