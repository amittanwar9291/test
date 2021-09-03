import { Injectable } from '@angular/core';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { CartilageAndLabrumUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-ui.model';
import { CartilageAndLabrumApiModel } from '@models/hipMRT/api/cartilage-and-labrum/cartilage-and-labrum-api.model';
import { CartilageAndLabrumMapper } from '@mappings/hipMRT/cartilage-and-labrum/cartilage-and-labrum-mapper';

@Injectable({
  providedIn: 'root'
})
export class CartilageAndLabrumHttpService extends BaseHttpService<
  CartilageAndLabrumApiModel,
  CartilageAndLabrumUiModel,
  CartilageAndLabrumMapper
> {
  constructor(httpClient: HttpClient, mapper: CartilageAndLabrumMapper, logger: LoggingService) {
    super(
      [AppConfig.hipMrtConfig.localBaseURL, AppConfig.hipMrtConfig.cartilageAndLabrum],
      httpClient,
      mapper,
      CartilageAndLabrumApiModel,
      CartilageAndLabrumUiModel,
      logger
    );
  }
}
