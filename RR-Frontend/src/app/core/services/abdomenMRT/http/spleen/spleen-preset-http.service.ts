import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { SpleenFindingPresetApiModel } from '@models/abdomenMRT/api/spleen/spleen-finding-preset-api.model';
import { SpleenFindingPresetUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-preset-ui.model';
import { SpleenFindingPresetMapper } from '@mappings/abdomenMRT/spleen/spleen-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpleenPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  SpleenFindingPresetApiModel,
  SpleenFindingPresetUiModel,
  SpleenFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpleenFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.spleen.presets],
      httpClient,
      mapper,
      SpleenFindingPresetApiModel,
      SpleenFindingPresetUiModel,
      logger
    );
  }
}
