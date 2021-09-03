import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { SoftPartsFindingPresetUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-preset-ui.model';
import { SoftPartsFindingPresetApiModel } from '@models/kneeMRT/api/soft-parts/soft-parts-finding-preset-api.model';
import { SoftPartsFindingPresetMapper } from '@mappings/kneeMRT/soft-parts/soft-parts-finding-preset.mapper';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SoftPartsFindingPresetApiModel,
  SoftPartsFindingPresetUiModel,
  SoftPartsFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SoftPartsFindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.kneeMrtConfig.softParts.presets,
      httpClient,
      mapper,
      SoftPartsFindingPresetApiModel,
      SoftPartsFindingPresetUiModel,
      logger
    );
  }
}
