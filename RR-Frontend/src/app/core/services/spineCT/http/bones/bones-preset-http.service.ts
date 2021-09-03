import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';

import { BonesPresetApiModel } from '@models/spineCT/api/bones/bones-preset-api.model';
import { BonesPresetUiModel } from '@models/spineCT/ui/bones/bones-preset-ui.model';
import { SpineCTBonesPresetMapper } from '@mappings/spineCT/bones/spineCT-bones-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  BonesPresetApiModel,
  BonesPresetUiModel,
  SpineCTBonesPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpineCTBonesPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.bones.presets],
      httpClient,
      mapper,
      BonesPresetApiModel,
      BonesPresetUiModel,
      logger
    );
  }
}
