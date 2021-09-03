import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { BonesDiagnosisPresetApiModel } from '@models/shoulderMRT/api/bones/bones-diagnosis-preset-api.model';
import { BonesDiagnosisPresetUiModel } from '@models/shoulderMRT/ui/bones/bones-diagnosis-preset-ui-model';

import { BonesDiagnosisPresetMapper } from '@mappings/shoulderMRT/bones/bones-diagnosis-preset.mapper';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  BonesDiagnosisPresetApiModel,
  BonesDiagnosisPresetUiModel,
  BonesDiagnosisPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BonesDiagnosisPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.bones.presets],
      httpClient,
      mapper,
      BonesDiagnosisPresetApiModel,
      BonesDiagnosisPresetUiModel,
      logger
    );
  }
}
