import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { SoftTissueFindingPresetMapper } from '@mappings/hipMRT/soft-tissue/soft-tissue-finding-preset.mapper';
import { SoftTissueFindingPresetUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-preset-ui.model';
import { SoftTissueFindingPresetApiModel } from '@models/hipMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuePresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SoftTissueFindingPresetApiModel,
  SoftTissueFindingPresetUiModel,
  SoftTissueFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SoftTissueFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.hipMrtConfig.localBaseURL, AppConfig.hipMrtConfig.softTissue.presets],
      httpClient,
      mapper,
      SoftTissueFindingPresetApiModel,
      SoftTissueFindingPresetUiModel,
      logger
    );
  }
}
