import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { HandMRTEvaluationMapper } from '@mappings/handMRT/evaluation/handMRT-evaluation.mapper';

import { EvaluationApiModel } from '@models/handMRT/api/evaluation/evaluation-api.model';
import { EvaluationUiModel } from '@models/handMRT/ui/evaluation/evaluation-ui.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationHttpService extends BaseHttpService<EvaluationApiModel, EvaluationUiModel, HandMRTEvaluationMapper> {
  constructor(httpClient: HttpClient, mapper: HandMRTEvaluationMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.evaluation],
      httpClient,
      mapper,
      EvaluationApiModel,
      EvaluationUiModel,
      logger
    );
  }
}
