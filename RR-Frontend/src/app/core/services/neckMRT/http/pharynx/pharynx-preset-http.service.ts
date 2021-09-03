import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { PharynxFindingPresetApiModel } from '@models/neckMRT/api/pharynx/pharynx-finding-preset-api.model';
import { PharynxFindingPresetUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-preset-ui.model';
import { PharynxFindingPresetMapper } from '@mappings/neckMRT/pharynx/pharynx-finding-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class PharynxPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  PharynxFindingPresetApiModel,
  PharynxFindingPresetUiModel,
  PharynxFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: PharynxFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.neckMrtConfig.pharynx.presets, httpClient, mapper, PharynxFindingPresetApiModel, PharynxFindingPresetUiModel, logger);
  }
}
