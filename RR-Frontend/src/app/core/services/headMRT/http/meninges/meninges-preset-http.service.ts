import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { MeningesPresetApiModel } from '@models/headMRT/api/meninges/meninges-preset-api.model';
import { MeningesPresetUiModel } from '@models/headMRT/ui/meninges/meninges-preset-ui.model';
import { MeningesPresetMapper } from '@mappings/headMRT/meninges/meninges-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class MeningesPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  MeningesPresetApiModel,
  MeningesPresetUiModel,
  MeningesPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: MeningesPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.meninges.presets],
      httpClient,
      mapper,
      MeningesPresetApiModel,
      MeningesPresetUiModel,
      logger
    );
  }
}
