import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SoftTissueFindingPresetMapper } from '@mappings/elbowMRT/soft-tissue/soft-tissue-finding-preset.mapper';
import { SoftTissueFindingPresetApiModel } from '@models/elbowMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';
import { SoftTissueFindingPresetUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-preset-ui.model';
import { LoggingService } from '@services/shared';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { AppConfig } from '../../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuePresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SoftTissueFindingPresetApiModel,
  SoftTissueFindingPresetUiModel,
  SoftTissueFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SoftTissueFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.elbowMrtConfig.localBaseURL, AppConfig.elbowMrtConfig.softTissue.presets],
      httpClient,
      mapper,
      SoftTissueFindingPresetApiModel,
      SoftTissueFindingPresetUiModel,
      logger
    );
  }
}
