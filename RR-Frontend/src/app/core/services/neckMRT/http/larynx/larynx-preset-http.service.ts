import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { LarynxFindingPresetApiModel } from '@models/neckMRT/api/larynx/larynx-finding-preset-api.model';
import { LarynxFindingPresetUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-preset-ui.model';
import { LarynxFindingPresetMapper } from '@mappings/neckMRT/larynx/larynx-finding-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class LarynxPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  LarynxFindingPresetApiModel,
  LarynxFindingPresetUiModel,
  LarynxFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: LarynxFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.neckMrtConfig.larynx.presets, httpClient, mapper, LarynxFindingPresetApiModel, LarynxFindingPresetUiModel, logger);
  }
}
