import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';
import { KidneysFindingPresetApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-finding-preset-api.model';
import { KidneysFindingPresetUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-preset-ui.model';
import { KidneysFindingPresetMapper } from '@mappings/abdomenMRT/kidneys/kidneys-finding-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class KidneysPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  KidneysFindingPresetApiModel,
  KidneysFindingPresetUiModel,
  KidneysFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: KidneysFindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.abdomenMRTConfig.kidneys.presets,
      httpClient,
      mapper,
      KidneysFindingPresetApiModel,
      KidneysFindingPresetUiModel,
      logger
    );
  }
}
