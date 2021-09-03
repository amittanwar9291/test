import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { MammographyFindingFindingPresetApiModel } from '@models/mammaMX/api/mammography-finding/mammography-finding-finding-preset-api.model';
import { MammographyFindingFindingPresetMapper } from '@mappings/mammaMX/mammography-finding/mammography-finding-finding-preset.mapper';
import { MammographyFindingFindingPresetUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MammographyFindingPresetsHttpService extends DifferentialDiagnosisPresetsBaseService<
  MammographyFindingFindingPresetApiModel,
  MammographyFindingFindingPresetUiModel,
  MammographyFindingFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: MammographyFindingFindingPresetMapper, logger: LoggingService) {
    super(
      AppConfig.mammaMxConfig.mammographyFinding.presets,
      httpClient,
      mapper,
      MammographyFindingFindingPresetApiModel,
      MammographyFindingFindingPresetUiModel,
      logger
    );
  }
}
