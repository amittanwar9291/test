import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { CerebrospinalFluidSpacePresetApiModel } from '@models/headMRT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-preset-api.model';
import { CerebrospinalFluidSpacePresetUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-preset-ui.model';
import { CerebrospinalFluidSpacePresetMapper } from '@mappings/headMRT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpacePresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  CerebrospinalFluidSpacePresetApiModel,
  CerebrospinalFluidSpacePresetUiModel,
  CerebrospinalFluidSpacePresetMapper
> {
  constructor(httpClient: HttpClient, mapper: CerebrospinalFluidSpacePresetMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.cerebrospinalFluidSpace.presets],
      httpClient,
      mapper,
      CerebrospinalFluidSpacePresetApiModel,
      CerebrospinalFluidSpacePresetUiModel,
      logger
    );
  }
}
