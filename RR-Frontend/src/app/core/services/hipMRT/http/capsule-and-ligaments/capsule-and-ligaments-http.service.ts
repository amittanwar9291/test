import { Injectable } from '@angular/core';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { Observable, of } from 'rxjs';

import { CapsuleAndLigamentsApiModel } from '@models/hipMRT/api/capsule-and-ligaments/capsule-and-ligaments-api.model';
import { CapsuleAndLigamentsUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-ui.model';

import { CapsuleAndLigamentsMapper } from '@mappings/hipMRT/capsule-and-ligaments/capsule-and-ligaments.mapper';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndLigamentsHttpService extends BaseHttpService<
  CapsuleAndLigamentsApiModel,
  CapsuleAndLigamentsUiModel,
  CapsuleAndLigamentsMapper
> {
  constructor(httpClient: HttpClient, mapper: CapsuleAndLigamentsMapper, logger: LoggingService) {
    super(
      [AppConfig.hipMrtConfig.localBaseURL, AppConfig.hipMrtConfig.capsuleAndLigaments.http],
      httpClient,
      mapper,
      CapsuleAndLigamentsApiModel,
      CapsuleAndLigamentsUiModel,
      logger
    );
  }
}
