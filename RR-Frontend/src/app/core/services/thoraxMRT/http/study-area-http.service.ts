import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { StudyAreaApiModel } from '@models/thoraxMRT/api/study-area/study-area-api.model';
import { StudyAreaUiModel } from '@models/thoraxMRT/ui/study-area/study-area-ui.model';
import { StudyAreaMapper } from '@mappings/thoraxMRT/study-area/study-area.mapper';

@Injectable({
  providedIn: 'root'
})
export class StudyAreaHttpService extends BaseHttpService<StudyAreaApiModel, StudyAreaUiModel, StudyAreaMapper> {
  constructor(httpClient: HttpClient, mapper: StudyAreaMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxMrtConfig.localBaseURL, AppConfig.thoraxMrtConfig.studyArea],
      httpClient,
      mapper,
      StudyAreaApiModel,
      StudyAreaUiModel,
      logger
    );
  }
}
