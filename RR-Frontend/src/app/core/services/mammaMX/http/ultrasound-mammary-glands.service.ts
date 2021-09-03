import { AppConfig } from 'app/app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { UltrasoundMammaryGlandsUiModel } from '@models/mammaMX/ui/ultrasound-mammary-glands/ultrasound-mammary-glands-ui.model';
import { UltrasoundMammaryGlandsApiModel } from '@models/mammaMX/api/ultrasound-mammary-glands/ultrasound-mammary-glands-api.model';
import { UltrasoundMammaryGlandsMapper } from '@mappings/mammaMX/ultrasound-mammary-glands/ultrasound-mammary-glands.mapper';

@Injectable({
  providedIn: 'root'
})
export class UltrasoundMammaryGlandsService extends BaseHttpService<
  UltrasoundMammaryGlandsApiModel,
  UltrasoundMammaryGlandsUiModel,
  UltrasoundMammaryGlandsMapper
> {
  constructor(httpClient: HttpClient, mapper: UltrasoundMammaryGlandsMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.ultrasoundMammaryGlands],
      httpClient,
      mapper,
      UltrasoundMammaryGlandsApiModel,
      UltrasoundMammaryGlandsUiModel,
      logger
    );
  }
}
