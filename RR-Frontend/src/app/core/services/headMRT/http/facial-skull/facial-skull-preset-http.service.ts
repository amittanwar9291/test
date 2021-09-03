import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { FacialSkullFindingPresetApiModel } from '@models/headMRT/api/facial-skull/facial-skull-finding-preset-api.model';
import { FacialSkullFindingPresetUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-preset-ui.model';
import { FacialSkullPresetFindingMapper } from '@mappings/headMRT/facial-skull/facial-skull-preset-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  FacialSkullFindingPresetApiModel,
  FacialSkullFindingPresetUiModel,
  FacialSkullPresetFindingMapper
> {
  constructor(httpClient: HttpClient, mapper: FacialSkullPresetFindingMapper, logger: LoggingService) {
    super(
      AppConfig.headMrtConfig.facialSkull.presets,
      httpClient,
      mapper,
      FacialSkullFindingPresetApiModel,
      FacialSkullFindingPresetUiModel,
      logger
    );
  }
}
