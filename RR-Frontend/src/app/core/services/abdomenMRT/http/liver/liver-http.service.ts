import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { LiverApiModel } from '@models/abdomenMRT/api/liver/liver-api.model';
import { LiverUiModel } from '@models/abdomenMRT/ui/liver/liver-ui.model';
import { LiverMapper } from '@mappings/abdomenMRT/liver/liver.mapper';

@Injectable({
  providedIn: 'root'
})
export class LiverHttpService extends BaseHttpService<LiverApiModel, LiverUiModel, LiverMapper> {
  constructor(httpClient: HttpClient, mapper: LiverMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.liver.http],
      httpClient,
      mapper,
      LiverApiModel,
      LiverUiModel,
      logger
    );
  }
}
