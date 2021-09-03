import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { ExaminationApiModel } from '@models/headMRT/api/examination/examination-api.model';
import { ExaminationUiModel } from '@models/headMRT/ui/examination/examination-ui.model';
import { ExaminationMapper } from '@mappings/headMRT/examination/examination.mapper';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class ExaminationHttpService extends BaseHttpService<ExaminationApiModel, ExaminationUiModel, ExaminationMapper> {
  constructor(httpClient: HttpClient, mapper: ExaminationMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.examination],
      httpClient,
      mapper,
      ExaminationApiModel,
      ExaminationUiModel,
      logger
    );
  }
}
