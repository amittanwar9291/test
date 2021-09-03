import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { BonesFindingPresetApiModel } from '@models/neckMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/neckMRT/ui/bones/bones-finding-preset-ui.model';
import { BonesFindingPresetMapper } from '@mappings/neckMRT/bones/bones-finding-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  BonesFindingPresetApiModel,
  BonesFindingPresetUiModel,
  BonesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BonesFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.neckMrtConfig.bones.presets, httpClient, mapper, BonesFindingPresetApiModel, BonesFindingPresetUiModel, logger);
  }
}
