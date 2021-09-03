import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { SellarRegionPresetsFindingMapper } from '@mappings/headMRT/sellar-region/sellar-region-presets-finding.mapper';
import { SellarRegionFindingPresetApiModel } from '@models/headMRT/api/sellar-region/sellar-region-finding-preset-api.model';
import { SellarRegionFindingPresetUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SellarRegionPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  SellarRegionFindingPresetApiModel,
  SellarRegionFindingPresetUiModel,
  SellarRegionPresetsFindingMapper
> {
  constructor(httpClient: HttpClient, mapper: SellarRegionPresetsFindingMapper, logger: LoggingService) {
    super(
      AppConfig.headMrtConfig.sellarRegion.presets,
      httpClient,
      mapper,
      SellarRegionFindingPresetApiModel,
      SellarRegionFindingPresetUiModel,
      logger
    );
  }
}
