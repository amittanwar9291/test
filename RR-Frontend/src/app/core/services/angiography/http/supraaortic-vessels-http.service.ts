import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { SupraaorticVesselsApiModel } from '@models/angiographyMRT/api/supraaortic-vessels/supraaortic-vessels-api.model';
import { SupraaorticVesselsUiModel } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { SupraaorticVesselsMapper } from '@mappings/angiographyMRT/supraaortic-vessels/supraaortic-vessels.mapper';

@Injectable({
  providedIn: 'root'
})
export class SupraaorticVesselsHttpService extends BaseHttpService<
  SupraaorticVesselsApiModel,
  SupraaorticVesselsUiModel,
  SupraaorticVesselsMapper
> {
  constructor(httpClient: HttpClient, mapper: SupraaorticVesselsMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.supraaorticVessels],
      httpClient,
      mapper,
      SupraaorticVesselsApiModel,
      SupraaorticVesselsUiModel,
      logger
    );
  }
}
