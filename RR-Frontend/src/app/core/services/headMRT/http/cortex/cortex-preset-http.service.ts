import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { CortexPresetApiModel } from '@models/headMRT/api/cortex/cortex-preset-api.model';
import { CortexPresetUiModel } from '@models/headMRT/ui/cortex/cortex-preset-ui.model';
import { CortexPresetMapper } from '@mappings/headMRT/cortex/cortex-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class CortexPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  CortexPresetApiModel,
  CortexPresetUiModel,
  CortexPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: CortexPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.cortex.presets],
      httpClient,
      mapper,
      CortexPresetApiModel,
      CortexPresetUiModel,
      logger
    );
  }
}
