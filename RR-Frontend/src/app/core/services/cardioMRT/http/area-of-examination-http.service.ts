import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AreaOfExaminationApiModel } from '@models/cardioMRT/api/area-of-examination/area-of-examination-api.model';
import { AreaOfExaminationUiModel } from '@models/cardioMRT/ui/area-of-examination/area-of-examination-ui.model';

import { AreaOfExaminationMapper } from '@mappings/cardioMRT/area-of-examination/area-of-examination.mapper';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AreaOfExaminationHttpService extends BaseHttpService<
  AreaOfExaminationApiModel,
  AreaOfExaminationUiModel,
  AreaOfExaminationMapper
> {
  constructor(httpClient: HttpClient, mapper: AreaOfExaminationMapper, logger: LoggingService) {
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.cardioMrtConfig.areaOfExamination],
      httpClient,
      mapper,
      AreaOfExaminationApiModel,
      AreaOfExaminationUiModel,
      logger
    );
  }
}
