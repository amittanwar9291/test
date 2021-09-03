import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { LiverFindingPresetApiModel } from '@models/abdomenMRT/api/liver/liver-finding-preset-api.model';
import { LiverFindingPresetUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-preset-ui.model';
import { LiverFindingPresetMapper } from '@mappings/abdomenMRT/liver/liver-finding-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class LiverPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  LiverFindingPresetApiModel,
  LiverFindingPresetUiModel,
  LiverFindingPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: LiverFindingPresetMapper, logger: LoggingService) {
    super(AppConfig.abdomenMRTConfig.liver.presets, httpClient, mapper, LiverFindingPresetApiModel, LiverFindingPresetUiModel, logger);
  }
}
