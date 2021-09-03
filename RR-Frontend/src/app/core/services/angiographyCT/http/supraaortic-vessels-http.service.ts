import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { SupraaorticVesselsMapper } from '@mappings/angiographyCT/supraaortic-vessels/supraaortic-vessels.mapper';
import { SupraaorticVesselsUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { SupraaorticVesselsApiModel } from '@models/angiographyCT/api/supraaortic-vessels/supraaortic-vessels-api.model';

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
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.supraaorticVessels],
      httpClient,
      mapper,
      SupraaorticVesselsApiModel,
      SupraaorticVesselsUiModel,
      logger
    );
  }
}
