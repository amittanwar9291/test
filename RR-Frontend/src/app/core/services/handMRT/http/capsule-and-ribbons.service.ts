import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { CapsuleAndRibbonsApiModel } from '@models/handMRT/api/capsule-and-ribbons/capsule-and-ribbons-api.model';
import { CapsuleAndRibbonsUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-ui.model';
import { CapsuleAndRibbonsMapper } from '@mappings/handMRT/capsule-and-ribbons/capsule-and-ribbons-mapper';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndRibbonsHttpService extends BaseHttpService<
  CapsuleAndRibbonsApiModel,
  CapsuleAndRibbonsUiModel,
  CapsuleAndRibbonsMapper
> {
  constructor(httpClient: HttpClient, mapper: CapsuleAndRibbonsMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.capsuleAndRibbons],
      httpClient,
      mapper,
      CapsuleAndRibbonsApiModel,
      CapsuleAndRibbonsUiModel,
      logger
    );
  }
}
