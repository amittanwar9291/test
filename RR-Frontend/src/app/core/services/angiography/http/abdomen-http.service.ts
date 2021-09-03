import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { AppConfig } from '../../../../app.config';
import { AbdomenApiModel } from '@models/angiographyMRT/api/abdomen/abdomen-api.model';
import { AbdomenUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-ui.model';
import { AbdomenMapper } from '@mappings/angiographyMRT/abdomen/abdomen.mapper';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbdomenHttpService extends BaseHttpService<AbdomenApiModel, AbdomenUiModel, AbdomenMapper> {
  constructor(httpClient: HttpClient, mapper: AbdomenMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.abdomen],
      httpClient,
      mapper,
      AbdomenApiModel,
      AbdomenUiModel,
      logger
    );
  }
}
