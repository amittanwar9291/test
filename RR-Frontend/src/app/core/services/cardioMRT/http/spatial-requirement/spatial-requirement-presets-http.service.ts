import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';

import { SpatialRequirementFindingPresetMapper } from '@mappings/cardioMRT/spatial-requirement/spatial-requirement-finding-preset.mapper';
import { SpatialRequirementFindingPresetUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-finding-preset-ui.model';
import { SpatialRequirementFindingPresetApiModel } from '@models/cardioMRT/api/spatial-requirement/spatial-requirement-finding-preset-api.model';

@Injectable({
  providedIn: 'root'
})
export class SpatialRequirementPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SpatialRequirementFindingPresetApiModel,
  SpatialRequirementFindingPresetUiModel,
  SpatialRequirementFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: SpatialRequirementFindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.cardioMrtConfig.spatialRequirement.presets,
      httpClient,
      mapper,
      SpatialRequirementFindingPresetApiModel,
      SpatialRequirementFindingPresetUiModel,
      logger
    );
  }
}
