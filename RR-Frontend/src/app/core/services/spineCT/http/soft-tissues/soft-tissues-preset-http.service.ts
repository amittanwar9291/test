import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { SoftTissuesPresetApiModel } from '@models/spineCT/api/soft-tissues/soft-tissues-preset-api.model';
import { SoftTissuesPresetUiModel } from '@models/spineCT/ui/soft-tissues/soft-tissues-preset-ui.model';
import { SpineCTSoftTissuesPresetMapper } from '@mappings/spineCT/soft-tissues/spineCT-soft-tissues-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuePresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  SoftTissuesPresetApiModel,
  SoftTissuesPresetUiModel,
  SpineCTSoftTissuesPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpineCTSoftTissuesPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.softTissues.presets],
      httpClient,
      mapper,
      SoftTissuesPresetApiModel,
      SoftTissuesPresetUiModel,
      logger
    );
  }
}
