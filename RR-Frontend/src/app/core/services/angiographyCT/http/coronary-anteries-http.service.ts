import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { CoronaryArteriesApiModel } from '@models/angiographyCT/api/coronary-arteries/coronary-arteries-api.model';
import { CoronaryArteriesUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-ui.model';
import { CoronaryArteriesMapper } from '@mappings/angiographyCT/coronary-arteries/coronary-arteries.mapper';

@Injectable({
  providedIn: 'root'
})
export class CoronaryAnteriesHttpService extends BaseHttpService<
  CoronaryArteriesApiModel,
  CoronaryArteriesUiModel,
  CoronaryArteriesMapper
> {
  constructor(httpClient: HttpClient, mapper: CoronaryArteriesMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.coronaryArteries],
      httpClient,
      mapper,
      CoronaryArteriesApiModel,
      CoronaryArteriesUiModel,
      logger
    );
  }
}
