import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { LigamentsAndTendonsApiModel } from '@models/feetMRT/api/ligaments-and-tendons/ligaments-and-tendons-api.model';
import { LigamentsAndTendonsUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-ui.model';
import { LigamentsAndTendonsMapper } from '@mappings/feetMRT/ligaments-and-tendons/ligaments-and-tendons.mapper';

@Injectable({
  providedIn: 'root'
})
export class LigamentsAndTendonsHttpService extends BaseHttpService<
  LigamentsAndTendonsApiModel,
  LigamentsAndTendonsUiModel,
  LigamentsAndTendonsMapper
> {
  constructor(httpClient: HttpClient, mapper: LigamentsAndTendonsMapper, logger: LoggingService) {
    super(
      [AppConfig.feetMrtConfig.localBaseURL, AppConfig.feetMrtConfig.ligamentsAndTendons],
      httpClient,
      mapper,
      LigamentsAndTendonsApiModel,
      LigamentsAndTendonsUiModel,
      logger
    );
  }
}
