import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { FemaleSexPresetMapper } from '@mappings/pelvisMRT/female-sex/female-sex-preset.mapper';
import { FemaleSexPresetApiModel } from '@models/pelvisMRT/api/female-sex/female-sex-preset-api.model';
import { FemaleSexPresetUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class FemaleSexPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  FemaleSexPresetApiModel,
  FemaleSexPresetUiModel,
  FemaleSexPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: FemaleSexPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.femaleGender.presets],
      httpClient,
      mapper,
      FemaleSexPresetApiModel,
      FemaleSexPresetUiModel,
      logger
    );
  }
}
