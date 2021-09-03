import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { SpineSacroiliacJointFindingPresetApiModel } from '@models/spineMRT/api/sacroiliac-joint/spine-sacroiliac-joint-finding-preset-api.model';
import { SpineSacroiliacJointFindingPresetUiModel } from '@models/spineMRT/ui/sacroiliac-joint/spine-sacroiliac-joint-finding-preset-ui.model';
import { SpineSacroiliacJointFindingPresetMapper } from '@mappings/spineMRT/sacroiliac-joint/spine-sacroiliac-joint-finding-preset.mapper';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class SacroiliacJointPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SpineSacroiliacJointFindingPresetApiModel,
  SpineSacroiliacJointFindingPresetUiModel,
  SpineSacroiliacJointFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpineSacroiliacJointFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.sacroiliacJoint.presets],
      httpClient,
      mapper,
      SpineSacroiliacJointFindingPresetApiModel,
      SpineSacroiliacJointFindingPresetUiModel,
      logger
    );
  }
}
