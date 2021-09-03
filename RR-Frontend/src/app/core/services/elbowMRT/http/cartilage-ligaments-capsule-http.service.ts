import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { CartilageLigamentsCapsuleApiModel } from '@models/elbowMRT/api/cartilage-ligaments-capsule/cartilage-ligaments-capsule-api.model';
import { CartilageLigamentsCapsuleUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-ui.model';
import { CartilageLigamentsCapsuleMapper } from '@mappings/elbowMRT/cartilage-ligaments-capsule/cartilage-ligaments-capsule.mapper';

@Injectable({
  providedIn: 'root'
})
export class CartilageLigamentsCapsuleHttpService extends BaseHttpService<
  CartilageLigamentsCapsuleApiModel,
  CartilageLigamentsCapsuleUiModel,
  CartilageLigamentsCapsuleMapper
> {
  constructor(httpClient: HttpClient, mapper: CartilageLigamentsCapsuleMapper, logger: LoggingService) {
    super(
      [AppConfig.elbowMrtConfig.localBaseURL, AppConfig.elbowMrtConfig.cartilage],
      httpClient,
      mapper,
      CartilageLigamentsCapsuleApiModel,
      CartilageLigamentsCapsuleUiModel,
      logger
    );
  }
}
