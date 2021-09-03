import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';
import { LabrumAndRibbonsDiagnosisPresetsMapper } from '@mappings/shoulderMRT/labrum-and-ribbons/labrum-and-ribbons-diagnosis-preset.mapper';
import { LabrumAndRibbonsDiagnosisPresetApiModel } from '@models/shoulderMRT/api/labrum-and-ribbons/labrum-and-ribbons-diagnosis-preset-api.model';
import { LabrumAndRibbonsDiagnosisPresetUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-diagnosis-preset-ui.model';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class LabrumAndRibbonsPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  LabrumAndRibbonsDiagnosisPresetApiModel,
  LabrumAndRibbonsDiagnosisPresetUiModel,
  LabrumAndRibbonsDiagnosisPresetsMapper
> {
  constructor(httpClient: HttpClient, mapper: LabrumAndRibbonsDiagnosisPresetsMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.labrumAndRibbons.presets],
      httpClient,
      mapper,
      LabrumAndRibbonsDiagnosisPresetApiModel,
      LabrumAndRibbonsDiagnosisPresetUiModel,
      logger
    );
  }
}
