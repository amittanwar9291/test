import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { GastrointestinalTractApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-api.model';
import { GastrointestinalTractUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-ui.model';
import { GastrointestinalTractMapper } from '@mappings/abdomenMRT/gastrointestinal-tract/gastrointestinal-tract.mapper';

@Injectable({
  providedIn: 'root'
})
export class GastrointestinalTractHttpService extends BaseHttpService<
  GastrointestinalTractApiModel,
  GastrointestinalTractUiModel,
  GastrointestinalTractMapper
> {
  constructor(httpClient: HttpClient, mapper: GastrointestinalTractMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.gastrointestinalTract.http],
      httpClient,
      mapper,
      GastrointestinalTractApiModel,
      GastrointestinalTractUiModel,
      logger
    );
  }
}
