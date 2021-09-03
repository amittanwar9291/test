import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { SpineMyelonFindingPresetMapper } from '@mappings/spineMRT/myelon/spine-myelon-finding-preset.mapper';

import { SpineMyelonFindingPresetApiModel } from '@models/spineMRT/api/myelon/spine-myelon-finding-preset-api.model';
import { SpineMyelonFindingPresetUiModel } from '@models/spineMRT/ui/myelon/presets/spine-myelon-finding-preset-ui.model';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

@Injectable({
  providedIn: 'root'
})
export class MyelonPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SpineMyelonFindingPresetApiModel,
  SpineMyelonFindingPresetUiModel,
  SpineMyelonFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpineMyelonFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.spinalCanal.presets],
      httpClient,
      mapper,
      SpineMyelonFindingPresetApiModel,
      SpineMyelonFindingPresetUiModel,
      logger
    );
  }
}
