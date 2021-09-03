import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { BonesFindingPresetApiModel } from '@models/feetMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/feetMRT/ui/bones/bones-finding-preset-ui.model';
import { BonesFindingPresetMapper } from '@mappings/feetMRT/bones/bones-finding-preset.mapper';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  BonesFindingPresetApiModel,
  BonesFindingPresetUiModel,
  BonesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BonesFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.feetMrtConfig.localBaseURL, AppConfig.feetMrtConfig.bones.presets],
      httpClient,
      mapper,
      BonesFindingPresetApiModel,
      BonesFindingPresetUiModel,
      logger
    );
  }
}
