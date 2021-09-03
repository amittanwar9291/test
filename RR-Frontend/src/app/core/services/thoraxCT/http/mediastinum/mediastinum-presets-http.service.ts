import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { MediastinumFindingPresetMapper } from '@mappings/thoraxMRT/mediastinum/mediastinum-finding-preset.mapper';
import { MediastinumFindingPresetUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-preset-ui.model';
import { MedistenumFindingPresetApiModel } from '@models/thoraxCT/api/mediastinum/medistenum-finding-preset-api.model';

@Injectable({
  providedIn: 'root'
})
export class MediastinumPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  MedistenumFindingPresetApiModel,
  MediastinumFindingPresetUiModel,
  MediastinumFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: MediastinumFindingPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.mediastinum.presets],
      httpClient,
      mapper,
      MedistenumFindingPresetApiModel,
      MediastinumFindingPresetUiModel,
      logger
    );
  }
}
