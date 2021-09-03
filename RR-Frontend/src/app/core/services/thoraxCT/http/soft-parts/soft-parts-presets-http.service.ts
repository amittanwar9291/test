import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { SoftPartsFindingsPresetMapper } from '@mappings/thoraxCT/soft-parts/soft-parts-findings-preset.mapper';
import { SoftPartsFindingPresetApiModel } from '@models/thoraxCT/api/soft-parts/soft-parts-finding-preset-api.model';
import { SoftPartsFindingPresetUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SoftPartsFindingPresetApiModel,
  SoftPartsFindingPresetUiModel,
  SoftPartsFindingsPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SoftPartsFindingsPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.softParts.presets],
      httpClient,
      mapper,
      SoftPartsFindingPresetApiModel,
      SoftPartsFindingPresetUiModel,
      logger
    );
  }
}
