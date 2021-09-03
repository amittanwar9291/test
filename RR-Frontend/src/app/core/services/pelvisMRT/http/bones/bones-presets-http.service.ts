import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { BonesFindingPresetMapper } from '@mappings/pelvisMRT/bones/bones-finding-preset.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

import { BonesFindingPresetApiModel } from '@models/pelvisMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  BonesFindingPresetApiModel,
  BonesFindingPresetUiModel,
  BonesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BonesFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.pelvisMrtConfig.bones.presets, httpClient, mapper, BonesFindingPresetApiModel, BonesFindingPresetUiModel, logger);
  }
}
