import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpineBonesFindingPresetMapper } from '@mappings/spineMRT/bones/spine-bones-finding-preset.mapper';

import { SpineBonesFindingPresetApiModel } from '@models/spineMRT/api/bones/spine-bones-finding-preset-api.model';
import { SpineBonesFindingPresetUiModel } from '@models/spineMRT/ui/bones/spine-bones-finding-preset-ui.model';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SpineBonesFindingPresetApiModel,
  SpineBonesFindingPresetUiModel,
  SpineBonesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpineBonesFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.bones.presets],
      httpClient,
      mapper,
      SpineBonesFindingPresetApiModel,
      SpineBonesFindingPresetUiModel,
      logger
    );
  }
}
