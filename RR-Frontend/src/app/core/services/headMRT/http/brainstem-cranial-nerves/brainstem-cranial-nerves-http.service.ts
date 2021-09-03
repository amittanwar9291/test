import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { BrainstemCranialNervesApiModel } from '@models/headMRT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-api.model';
import { BrainstemCranialNervesUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-ui.model';
import { BrainstemCranialNervesMapper } from '@mappings/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves.mapper';

@Injectable({
  providedIn: 'root'
})
export class BrainstemCranialNervesHttpService extends BaseHttpService<
  BrainstemCranialNervesApiModel,
  BrainstemCranialNervesUiModel,
  BrainstemCranialNervesMapper
> {
  constructor(httpClient: HttpClient, mapper: BrainstemCranialNervesMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.brainstemCranialNerves.http],
      httpClient,
      mapper,
      BrainstemCranialNervesApiModel,
      BrainstemCranialNervesUiModel,
      logger
    );
  }
}
