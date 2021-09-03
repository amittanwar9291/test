import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { LungInterstitiumFindingsPresetMapper } from '@mappings/thoraxCT/lung-interstitium/lung-interstitium-findings-preset.mapper';
import { LungInterstitiumFindingPresetApiModel } from '@models/thoraxCT/api/lung-interstitium/lung-interstitium-finding-preset-api.model';
import { LungInterstitiumFindingPresetUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-preset-ui.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LungInterstitiumPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  LungInterstitiumFindingPresetApiModel,
  LungInterstitiumFindingPresetUiModel,
  LungInterstitiumFindingsPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: LungInterstitiumFindingsPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.lungInterstitium.presets],
      httpClient,
      mapper,
      LungInterstitiumFindingPresetApiModel,
      LungInterstitiumFindingPresetUiModel,
      logger
    );
  }
}
