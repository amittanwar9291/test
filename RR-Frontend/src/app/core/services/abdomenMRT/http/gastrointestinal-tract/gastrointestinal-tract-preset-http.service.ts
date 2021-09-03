import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';
import { GastrointestinalTractFindingPresetApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-finding-preset-api.model';
import { GastrointestinalTractFindingPresetUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-preset-ui.model';
import { GastrointestinalTractFindingPresetMapper } from '@mappings/abdomenMRT/gastrointestinal-tract/gastrointestinal-tract-finding-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class GastrointestinalTractPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  GastrointestinalTractFindingPresetApiModel,
  GastrointestinalTractFindingPresetUiModel,
  GastrointestinalTractFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: GastrointestinalTractFindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.abdomenMRTConfig.gastrointestinalTract.presets,
      httpClient,
      mapper,
      GastrointestinalTractFindingPresetApiModel,
      GastrointestinalTractFindingPresetUiModel,
      logger
    );
  }
}
