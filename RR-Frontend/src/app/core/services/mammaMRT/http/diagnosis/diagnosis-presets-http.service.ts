import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { DiagnosisPresetUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-preset-ui.model';
import { DiagnosisPresetsApiModel } from '@models/mammaMRT/api/diagnosis/diagnosis-presets-api.model';

import { DiagnosisPresetsMapper } from '@mappings/mammaMRT/diagnosis/diagnosis-presets.mapper';

import { LoggingService } from '@services/shared';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  DiagnosisPresetsApiModel,
  DiagnosisPresetUiModel,
  DiagnosisPresetsMapper
> {
  constructor(httpClient: HttpClient, mapper: DiagnosisPresetsMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.diagnosis.presets],
      httpClient,
      mapper,
      DiagnosisPresetsApiModel,
      DiagnosisPresetUiModel,
      logger
    );
  }
}
