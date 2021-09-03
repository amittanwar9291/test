import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { Observable, of } from 'rxjs';

import { UpperArteriesApiModel } from '@models/angiographyCT/api/upper-arteries/upper-arteries-api.model';
import { UpperArteriesUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-ui.model';
import { UpperArteriesMapper } from '@mappings/angiographyCT/upper-arteries/upper-arteries.mapper';

@Injectable({
  providedIn: 'root'
})
export class UpperArteriesHttpService extends BaseHttpService<UpperArteriesApiModel, UpperArteriesUiModel, UpperArteriesMapper> {
  constructor(httpClient: HttpClient, mapper: UpperArteriesMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.upperArteries],
      httpClient,
      mapper,
      UpperArteriesApiModel,
      UpperArteriesUiModel,
      logger
    );
  }
}
