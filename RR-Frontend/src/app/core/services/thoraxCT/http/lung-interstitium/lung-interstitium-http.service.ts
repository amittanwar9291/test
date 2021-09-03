import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { LungInterstitiumApiModel } from '@models/thoraxCT/api/lung-interstitium/lung-interstitium-api.model';
import { LungInterstitiumUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-ui.model';

import { LungInterstitiumMapper } from '@mappings/thoraxCT/lung-interstitium/lung-interstitium.mapper';
import { DifferentialDiagnosisHttpService } from '@services/shared/differential-diagnosis/differential-diagnosis-http.service';

@Injectable({
  providedIn: 'root'
})
export class LungInterstitiumHttpService extends BaseHttpService<
  LungInterstitiumApiModel,
  LungInterstitiumUiModel,
  LungInterstitiumMapper
> {
  constructor(
    httpClient: HttpClient,
    mapper: LungInterstitiumMapper,
    private differentialDiagnosisService: DifferentialDiagnosisHttpService,
    logger: LoggingService
  ) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.lungInterstitium.http],
      httpClient,
      mapper,
      LungInterstitiumApiModel,
      LungInterstitiumUiModel,
      logger
    );
  }
}
