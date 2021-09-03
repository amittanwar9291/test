import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OsteochondralInterfaceMapper } from '@mappings/kneeMRT/osteochondral-interface/osteochondral-interface.mapper';

import { OsteochondralInterfaceApiModel } from '@models/kneeMRT/api/osteochondral-interface/osteochondral-interface-api.model';
import { OsteochondralInterfaceUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class OsteochondralInterfaceHttpService extends BaseHttpService<
  OsteochondralInterfaceApiModel,
  OsteochondralInterfaceUiModel,
  OsteochondralInterfaceMapper
> {
  constructor(httpClient: HttpClient, mapper: OsteochondralInterfaceMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.osteoInterface],
      httpClient,
      mapper,
      OsteochondralInterfaceApiModel,
      OsteochondralInterfaceUiModel,
      logger
    );
  }
}
