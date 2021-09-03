import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { CapsuleAndLigamentsFindingPresetMapper } from '@mappings/hipMRT/capsule-and-ligaments/capsule-and-ligaments-finding-preset.mapper';
import { CapsuleAndLigamentsFindingPresetApiModel } from '@models/hipMRT/api/capsule-and-ligaments/capsule-and-ligaments-finding-preset-api.model';
import { CapsuleAndLigamentsFindingPresetUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndLigamentsPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  CapsuleAndLigamentsFindingPresetApiModel,
  CapsuleAndLigamentsFindingPresetUiModel,
  CapsuleAndLigamentsFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: CapsuleAndLigamentsFindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.hipMrtConfig.capsuleAndLigaments.presets,
      httpClient,
      mapper,
      CapsuleAndLigamentsFindingPresetApiModel,
      CapsuleAndLigamentsFindingPresetUiModel,
      logger
    );
  }
}
