import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { PancreasFindingPresetApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-finding-preset-api.model';
import { PancreasFindingPresetUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-preset-ui.model';
import { PancreasFindingPresetMapper } from '@mappings/abdomenMRT/pancreas/pancreas-finding-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class PancreasPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  PancreasFindingPresetApiModel,
  PancreasFindingPresetUiModel,
  PancreasFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: PancreasFindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.abdomenMRTConfig.pancreas.presets,
      httpClient,
      mapper,
      PancreasFindingPresetApiModel,
      PancreasFindingPresetUiModel,
      logger
    );
  }
}
