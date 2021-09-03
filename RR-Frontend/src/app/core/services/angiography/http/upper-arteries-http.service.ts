import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { UpperArteriesApiModel } from '@models/angiographyMRT/api/upper-arteries/upper-arteries-api.model';
import { UpperArteriesUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-ui.model';
import { UpperArteriesMapper } from '@mappings/angiographyMRT/upper-arteries/upper-arteries.mapper';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpperArteriesHttpService extends BaseHttpService<UpperArteriesApiModel, UpperArteriesUiModel, UpperArteriesMapper> {
  constructor(httpClient: HttpClient, mapper: UpperArteriesMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.upperArteries],
      httpClient,
      mapper,
      UpperArteriesApiModel,
      UpperArteriesUiModel,
      logger
    );
  }
}
