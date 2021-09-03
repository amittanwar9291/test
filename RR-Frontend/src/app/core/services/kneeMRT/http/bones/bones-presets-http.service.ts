import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { KneeBonesFindingPresetMapper } from '@mappings/kneeMRT/bones/knee-bones-finding-preset.mapper';

import { KneeBonesFindingPresetApiModel } from '@models/kneeMRT/api/bones/knee-bones-finding-preset-api.model';
import { KneeBonesFindingPresetUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-preset-ui.model';

import { LoggingService } from '@services/shared/logging/logging.service';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class BonesPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  KneeBonesFindingPresetApiModel,
  KneeBonesFindingPresetUiModel,
  KneeBonesFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: KneeBonesFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.kneeMrtConfig.bones.presets, httpClient, mapper, KneeBonesFindingPresetApiModel, KneeBonesFindingPresetUiModel, logger);
  }
}
