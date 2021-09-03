import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BonesFindingPresetMapper } from '@mappings/elbowMRT/bones/bones-finding-preset.mapper';
import { BonesFindingPresetApiModel } from '@models/elbowMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/elbowMRT/ui/bones/bones-finding-preset-ui.model';
import { LoggingService } from '@services/shared';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { AppConfig } from '../../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  BonesFindingPresetApiModel,
  BonesFindingPresetUiModel,
  BonesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BonesFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.elbowMrtConfig.localBaseURL, AppConfig.elbowMrtConfig.bones.presets],
      httpClient,
      mapper,
      BonesFindingPresetApiModel,
      BonesFindingPresetUiModel,
      logger
    );
  }
}
