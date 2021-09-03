import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { SpineCTDiscMapper } from '@mappings/spineCT/disc/spineCT-disc.mapper';

import { DiscApiModel, DiscUiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class DiscHttpService extends BaseHttpService<DiscApiModel, DiscUiModel, SpineCTDiscMapper> {
  constructor(httpClient: HttpClient, mapper: SpineCTDiscMapper, logger: LoggingService) {
    super([AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.disc], httpClient, mapper, DiscApiModel, DiscUiModel, logger);
  }
}
