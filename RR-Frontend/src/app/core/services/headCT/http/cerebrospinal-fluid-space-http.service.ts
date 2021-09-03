import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { CerebrospinalFluidSpaceApiModel } from '@models/headCT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-api.model';
import { CerebrospinalFluidSpaceUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { CerebrospinalFluidSpaceMapper } from '@mappings/headCT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-mapper';

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
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.cerebrospinalFluidSpace.http],
      httpClient,
      mapper,
      CerebrospinalFluidSpaceApiModel,
      CerebrospinalFluidSpaceUiModel,
      logger
    );
  }
}
