import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { ExaminationApiModel } from '@models/headCT/api/examination/examination-api.model';
import { ExaminationUiModel } from '@models/headCT/ui/examination/examination-ui.model';
import { ExaminationMapper } from '@mappings/headCT/examination/examination.mapper';

@Injectable({
  providedIn: 'root'
})
export class ExaminationHttpService extends BaseHttpService<ExaminationApiModel, ExaminationUiModel, ExaminationMapper> {
  constructor(httpClient: HttpClient, mapper: ExaminationMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.examination],
      httpClient,
      mapper,
      ExaminationApiModel,
      ExaminationUiModel,
      logger
    );
  }
}
