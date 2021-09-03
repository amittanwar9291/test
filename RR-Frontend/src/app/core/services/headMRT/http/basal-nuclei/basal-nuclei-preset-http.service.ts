import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { BasalNucleiPresetMapper } from '@mappings/headMRT/basal_nuclei/basal-nuclei-preset.mapper';
import { BasalNucleiPresetUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-preset-ui.model';
import { BasalNucleiPresetApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-preset-api.model';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  BasalNucleiPresetApiModel,
  BasalNucleiPresetUiModel,
  BasalNucleiPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BasalNucleiPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.basalNuclei.presets],
      httpClient,
      mapper,
      BasalNucleiPresetApiModel,
      BasalNucleiPresetUiModel,
      logger
    );
  }
}
