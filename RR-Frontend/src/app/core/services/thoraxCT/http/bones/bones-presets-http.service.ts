import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { BonesFindingPresetMapper } from '@mappings/thoraxCT/bones/bones-finding-preset.mapper';
import { BonesFindingPresetApiModel } from '@models/thoraxCT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/thoraxCT/ui/bones/bones-finding-preset-ui.model';

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
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.bones.presets],
      httpClient,
      mapper,
      BonesFindingPresetApiModel,
      BonesFindingPresetUiModel,
      logger
    );
  }
}
