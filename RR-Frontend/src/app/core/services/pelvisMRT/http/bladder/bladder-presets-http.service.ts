import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { BladderFindingPresetMapper } from '@mappings/pelvisMRT/bladder/bladder-finding-preset.mapper';

import { BladderFindingPresetApiModel } from '@models/pelvisMRT/api/bladder/bladder-finding-preset-api.model';
import { BladderFindingPresetUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-preset-ui.model';

import { LoggingService } from '@services/shared/logging/logging.service';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class BladderPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  BladderFindingPresetApiModel,
  BladderFindingPresetUiModel,
  BladderFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BladderFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.pelvisMrtConfig.bladder.presets, httpClient, mapper, BladderFindingPresetApiModel, BladderFindingPresetUiModel, logger);
  }
}
