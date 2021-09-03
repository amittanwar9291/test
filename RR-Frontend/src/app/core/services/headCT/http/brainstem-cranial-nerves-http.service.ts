import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { BrainstemCranialNervesApiModel } from '@models/headCT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-api.model';
import { BrainstemCranialNervesUiModel } from '@models/headCT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-ui.model';
import { BrainstemCranialNervesMapper } from '@mappings/headCT/brainstem-cranial-nerves/brainstem-cranial-nerves-mapper';

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
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.brainstemCranialNerves],
      httpClient,
      mapper,
      BrainstemCranialNervesApiModel,
      BrainstemCranialNervesUiModel,
      logger
    );
  }
}
