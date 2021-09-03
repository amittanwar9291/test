import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { SoftTissueFindingPresetApiModel } from '@models/feetMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';
import { SoftTissueFindingPresetUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-preset-ui.model';
import { SoftTissueFindingPresetMapper } from '@mappings/feetMRT/soft-tissue/soft-tissue-finding-preset.mapper';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuePresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  SoftTissueFindingPresetApiModel,
  SoftTissueFindingPresetUiModel,
  SoftTissueFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SoftTissueFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.feetMrtConfig.localBaseURL, AppConfig.feetMrtConfig.softTissue.presets],
      httpClient,
      mapper,
      SoftTissueFindingPresetApiModel,
      SoftTissueFindingPresetUiModel,
      logger
    );
  }
}
