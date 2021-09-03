import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { UltrasoundFindingSubfindingPresetApiModel } from '@models/mammaMX/api/ultrasound-finding/ultrasound-finding-subfinding-preset-api.model';
import { UltrasoundFindingSubfindingPresetMapper } from '@mappings/mammaMX/ultrasound-finding/ultrasound-finding-subfinding-preset.mapper';
import { UltrasoundFindingSubfindingPresetUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class UltrasoundFindingPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  UltrasoundFindingSubfindingPresetApiModel,
  UltrasoundFindingSubfindingPresetUiModel,
  UltrasoundFindingSubfindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: UltrasoundFindingSubfindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.mammaMxConfig.ultrasoundFinding.presets,
      httpClient,
      mapper,
      UltrasoundFindingSubfindingPresetApiModel,
      UltrasoundFindingSubfindingPresetUiModel,
      logger
    );
  }
}
