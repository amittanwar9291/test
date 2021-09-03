import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { NerveCompressionApiModel } from '@models/handMRT/api/nerve-compression/nerve-compression-api.model';
import { NerveCompressionUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-ui.model';
import { NerveCompressionMapper } from '@mappings/handMRT/nerve-compression/nerve-compression-mapper';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NerveCompressionHttpService extends BaseHttpService<
  NerveCompressionApiModel,
  NerveCompressionUiModel,
  NerveCompressionMapper
> {
  constructor(httpClient: HttpClient, mapper: NerveCompressionMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.nerveCompression],
      httpClient,
      mapper,
      NerveCompressionApiModel,
      NerveCompressionUiModel,
      logger
    );
  }
}
