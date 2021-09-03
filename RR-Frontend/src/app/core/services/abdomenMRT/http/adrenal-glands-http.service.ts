import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { AdrenalGlandsMapper } from '@mappings/abdomenMRT/adrenal-glands/adrenal-glands.mapper';
import { AdrenalGlandsUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-ui.model';
import { AdrenalGlandsApiModel } from '@models/abdomenMRT/api/adrenal-glands/adrenal-glands-api.model';

@Injectable({
  providedIn: 'root'
})
export class AdrenalGlandsHttpService extends BaseHttpService<AdrenalGlandsApiModel, AdrenalGlandsUiModel, AdrenalGlandsMapper> {
  constructor(httpClient: HttpClient, mapper: AdrenalGlandsMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.adrenalGlands.http],
      httpClient,
      mapper,
      AdrenalGlandsApiModel,
      AdrenalGlandsUiModel,
      logger
    );
  }
}
