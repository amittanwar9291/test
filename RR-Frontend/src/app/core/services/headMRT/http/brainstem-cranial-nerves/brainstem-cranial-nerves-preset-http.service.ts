import { Injectable } from '@angular/core';
import { DifferentialDiagnosisPresetsBaseService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-presets-base.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { BrainstemCranialNervesPresetApiModel } from '@models/headMRT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-preset-api.model';
import { BrainstemCranialNervesPresetUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-preset-ui.model';
import { BrainstemCranialNervesPresetMapper } from '@mappings/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves-preset.mapper';

@Injectable({
  providedIn: 'root'
})
export class BrainstemCranialNervesPresetHttpService extends DifferentialDiagnosisPresetsBaseService<
  BrainstemCranialNervesPresetApiModel,
  BrainstemCranialNervesPresetUiModel,
  BrainstemCranialNervesPresetMapper
> {
  constructor(httpClient: HttpClient, mapper: BrainstemCranialNervesPresetMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.brainstemCranialNerves.presets],
      httpClient,
      mapper,
      BrainstemCranialNervesPresetApiModel,
      BrainstemCranialNervesPresetUiModel,
      logger
    );
  }
}
