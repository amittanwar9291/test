import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { MaleSexPresetMapper } from '@mappings/pelvisMRT/male-sex/male-sex-preset.mapper';
import { MaleSexPresetUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-preset-ui.model';
import { MaleSexPresetApiModel } from '@models/pelvisMRT/api/male-sex/male-sex-preset-api.model';

@Injectable({
  providedIn: 'root'
})
export class MaleSexPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  MaleSexPresetApiModel,
  MaleSexPresetUiModel,
  MaleSexPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: MaleSexPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.maleGender.presets],
      httpClient,
      mapper,
      MaleSexPresetApiModel,
      MaleSexPresetUiModel,
      logger
    );
  }
}
