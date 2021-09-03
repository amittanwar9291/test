import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { BonesFindingPresetMapper } from '@mappings/hipMRT/bones/bones-finding-preset.mapper';
import { BonesFindingPresetApiModel } from '@models/hipMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/hipMRT/ui/bones/bones-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  BonesFindingPresetApiModel,
  BonesFindingPresetUiModel,
  BonesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BonesFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.hipMrtConfig.bones.presets, httpClient, mapper, BonesFindingPresetApiModel, BonesFindingPresetUiModel, logger);
  }
}
