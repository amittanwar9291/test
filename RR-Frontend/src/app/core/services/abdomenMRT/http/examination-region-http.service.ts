import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { ExaminationRegionApiModel } from '@models/abdomenMRT/api/examination-region/examination-region-api.model';
import { ExaminationRegionUiModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui.model';
import { ExaminationRegionMapper } from '@mappings/abdomenMRT/examination-region/examination-region.mapper';

@Injectable({
  providedIn: 'root'
})
export class ExaminationRegionHttpService extends BaseHttpService<
  ExaminationRegionApiModel,
  ExaminationRegionUiModel,
  ExaminationRegionMapper
> {
  constructor(httpClient: HttpClient, mapper: ExaminationRegionMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.examinationRegion],
      httpClient,
      mapper,
      ExaminationRegionApiModel,
      ExaminationRegionUiModel,
      logger
    );
  }
}
