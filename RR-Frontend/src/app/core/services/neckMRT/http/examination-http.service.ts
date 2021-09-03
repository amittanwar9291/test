import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { ExaminationApiModel } from '@models/neckMRT/api/examination/examination-api.model';
import { ExaminationUiModel } from '@models/neckMRT/ui/examination/examination-ui.model';
import { ExaminationMapper } from '@mappings/neckMRT/examination/examination.mapper';

@Injectable({
  providedIn: 'root'
})
export class ExaminationHttpService extends BaseHttpService<ExaminationApiModel, ExaminationUiModel, ExaminationMapper> {
  constructor(httpClient: HttpClient, mapper: ExaminationMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.examination],
      httpClient,
      mapper,
      ExaminationApiModel,
      ExaminationUiModel,
      logger
    );
  }
}
