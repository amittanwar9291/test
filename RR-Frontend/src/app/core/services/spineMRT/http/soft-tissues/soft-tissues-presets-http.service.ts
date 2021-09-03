import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { SpineSoftTissuesFindingPresetApiModel } from '@models/spineMRT/api/soft-tissues/spine-soft-tissues-finding-preset-api.model';
import { SpineSoftTissuesFindingPresetUiModel } from '@models/spineMRT/ui/soft-tissues/spine-soft-tissues-finding-preset-ui.model';
import { SpineSoftTissuesFindingPresetMapper } from '@mappings/spineMRT/soft-tissues/spine-soft-tissues-finding-preset.mapper';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SpineSoftTissuesFindingPresetApiModel,
  SpineSoftTissuesFindingPresetUiModel,
  SpineSoftTissuesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpineSoftTissuesFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.softTissues.presets],
      httpClient,
      mapper,
      SpineSoftTissuesFindingPresetApiModel,
      SpineSoftTissuesFindingPresetUiModel,
      logger
    );
  }
}
