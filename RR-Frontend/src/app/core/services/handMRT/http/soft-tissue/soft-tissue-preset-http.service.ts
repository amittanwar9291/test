import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared/logging/logging.service';
import { SoftTissueFindingPresetApiModel } from '@models/handMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';
import { SoftTissueFindingPresetUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-preset-ui.model';
import { SoftTissueFindingPresetMapper } from '@mappings/handMRT/soft-tissue/soft-tissue-finding-preset.mapper';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuePresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  SoftTissueFindingPresetApiModel,
  SoftTissueFindingPresetUiModel,
  SoftTissueFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SoftTissueFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.softTissue.presets],
      httpClient,
      mapper,
      SoftTissueFindingPresetApiModel,
      SoftTissueFindingPresetUiModel,
      logger
    );
  }
}
