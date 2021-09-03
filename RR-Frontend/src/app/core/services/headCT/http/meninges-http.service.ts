import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { MeningesApiModel } from '@models/headCT/api/meninges/meninges-api.model';
import { MeningesUiModel } from '@models/headCT/ui/meninges/meninges-ui-model';
import { MeningesMapper } from '@mappings/headCT/meninges/meninges.mapper';

@Injectable({
  providedIn: 'root'
})
export class MeningesHttpService extends BaseHttpService<MeningesApiModel, MeningesUiModel, MeningesMapper> {
  constructor(httpClient: HttpClient, mapper: MeningesMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.meninges.http],
      httpClient,
      mapper,
      MeningesApiModel,
      MeningesUiModel,
      logger
    );
  }
}
