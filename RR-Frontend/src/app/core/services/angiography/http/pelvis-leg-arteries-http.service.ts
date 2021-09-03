import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { PelvisLegArteriesApiModel } from '@models/angiographyMRT/api/pelvis-leg-arteries/pelvis-leg-arteries-api.model';
import { PelvisLegArteriesMapper } from '@mappings/angiographyMRT/pelvis-leg-arteries/pelvis-leg-arteries.mapper';
import { PelvisLegArteriesUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';

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
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.pelvisLegArteries],
      httpClient,
      mapper,
      PelvisLegArteriesApiModel,
      PelvisLegArteriesUiModel,
      logger
    );
  }
}
