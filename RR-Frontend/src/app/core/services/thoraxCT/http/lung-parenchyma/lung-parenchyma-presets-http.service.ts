import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { LungParenchymaFindingPresetMapper } from '@mappings/thoraxCT/lung-parenchyma/lung-parenchyma-finding-preset.mapper';
import { LungParenchymaFindingPresetUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-preset-ui.model';
import { LungParenchymaFindingPresetApiModel } from '@models/thoraxCT/api/lung-parenchyma/lung-parenchyma-finding-preset-api.model';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  LungParenchymaFindingPresetApiModel,
  LungParenchymaFindingPresetUiModel,
  LungParenchymaFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: LungParenchymaFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.lungParenchyma.presets],
      httpClient,
      mapper,
      LungParenchymaFindingPresetApiModel,
      LungParenchymaFindingPresetUiModel,
      logger
    );
  }
}
