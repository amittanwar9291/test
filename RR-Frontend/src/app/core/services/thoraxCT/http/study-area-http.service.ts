import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { StudyAreaApiModel } from '@models/thoraxCT/api/study-area/study-area-api.model';
import { StudyAreaUiModel } from '@models/thoraxCT/ui/study-area/study-area-ui.model';

import { StudyAreaMapper } from '@mappings/thoraxCT/study-area/study-area.mapper';

@Injectable({
  providedIn: 'root'
})
export class StudyAreaHttpService extends BaseHttpService<StudyAreaApiModel, StudyAreaUiModel, StudyAreaMapper> {
  constructor(httpClient: HttpClient, mapper: StudyAreaMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.studyArea],
      httpClient,
      mapper,
      StudyAreaApiModel,
      StudyAreaUiModel,
      logger
    );
  }
}
