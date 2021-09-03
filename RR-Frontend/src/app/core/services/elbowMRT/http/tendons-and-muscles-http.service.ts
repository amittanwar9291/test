import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { TendonsAndMusclesApiModel } from '@models/elbowMRT/api/tendons-and-muscles/tendons-and-muscles-api.model';
import { TendonsAndMusclesUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-ui.model';
import { TendonsAndMusclesMapper } from '@mappings/elbowMRT/tendons-and-muscles/tendons-and-muscles.mapper';

@Injectable({
  providedIn: 'root'
})
export class TendonsAndMusclesHttpService extends BaseHttpService<
  TendonsAndMusclesApiModel,
  TendonsAndMusclesUiModel,
  TendonsAndMusclesMapper
> {
  constructor(httpClient: HttpClient, mapper: TendonsAndMusclesMapper, logger: LoggingService) {
    super(
      [AppConfig.elbowMrtConfig.localBaseURL, AppConfig.elbowMrtConfig.tendonsAndMuscles],
      httpClient,
      mapper,
      TendonsAndMusclesApiModel,
      TendonsAndMusclesUiModel,
      logger
    );
  }
}
