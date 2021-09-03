import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { IntervertebalDiscJointsApiModel } from '@models/spineMRT/api/intervertebal-disc-joints/intervertebal-disc-joints-api.model';
import { IntervertebralDiscJointsUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-ui.model';
import { IntervertebalDiscJointsMapper } from '@mappings/spineMRT/intervertebal-disc-joints/intervertebal-disc-joints.mapper';

@Injectable({
  providedIn: 'root'
})
export class IntervertebalDiscJointsService extends BaseHttpService<
  IntervertebalDiscJointsApiModel,
  IntervertebralDiscJointsUiModel,
  IntervertebalDiscJointsMapper
> {
  constructor(httpClient: HttpClient, mapper: IntervertebalDiscJointsMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.disc.http],
      httpClient,
      mapper,
      IntervertebalDiscJointsApiModel,
      IntervertebralDiscJointsUiModel,
      logger
    );
  }
}
