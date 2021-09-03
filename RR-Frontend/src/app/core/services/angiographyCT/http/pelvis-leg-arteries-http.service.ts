import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { PelvisLegArteriesMapper } from '@mappings/angiographyCT/pelvis-leg-arteries/pelvis-leg-arteries.mapper';
import { PelvisLegArteriesUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';
import { PelvisLegArteriesApiModel } from '@models/angiographyCT/api/pelvis-leg-arteries/pelvis-leg-arteries-api.model';

@Injectable({
  providedIn: 'root'
})
export class PelvisLegArteriesHttpService extends BaseHttpService<
  PelvisLegArteriesApiModel,
  PelvisLegArteriesUiModel,
  PelvisLegArteriesMapper
> {
  constructor(httpClient: HttpClient, mapper: PelvisLegArteriesMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.pelvisLegArteries],
      httpClient,
      mapper,
      PelvisLegArteriesApiModel,
      PelvisLegArteriesUiModel,
      logger
    );
  }
}
