import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { AppConfig } from '../../../../app.config';
import { Observable, of } from 'rxjs';
import { AbdomenApiModel } from '@models/angiographyCT/api/abdomen/abdomen-api.model';
import { AbdomenUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-ui.model';
import { AbdomenMapper } from '@mappings/angiographyCT/abdomen/abdomen.mapper';

@Injectable({
  providedIn: 'root'
})
export class AbdomenHttpService extends BaseHttpService<AbdomenApiModel, AbdomenUiModel, AbdomenMapper> {
  constructor(httpClient: HttpClient, mapper: AbdomenMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.abdomen],
      httpClient,
      mapper,
      AbdomenApiModel,
      AbdomenUiModel,
      logger
    );
  }
}
