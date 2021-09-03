import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LabrumAndRibbonsDiagnosisPresetApiModel } from '@models/shoulderMRT/api/labrum-and-ribbons/labrum-and-ribbons-diagnosis-preset-api.model';
import { LabrumAndRibbonsDiagnosisPresetUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-diagnosis-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LabrumAndRibbonsDiagnosisPresetsMapper
  implements IMapper<LabrumAndRibbonsDiagnosisPresetApiModel, LabrumAndRibbonsDiagnosisPresetUiModel> {
  constructor() {
    automapper
      .createMap('LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_ApiModel', 'LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_UiModel')
      .convertToType(LabrumAndRibbonsDiagnosisPresetUiModel);
    automapper
      .createMap('LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_UiModel', 'LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_ApiModel')
      .convertToType(LabrumAndRibbonsDiagnosisPresetApiModel);
  }

  mapToAPI(
    source: LabrumAndRibbonsDiagnosisPresetUiModel,
    out: LabrumAndRibbonsDiagnosisPresetApiModel
  ): LabrumAndRibbonsDiagnosisPresetApiModel {
    out = automapper.map(
      'LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_UiModel',
      'LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_ApiModel',
      source
    );

    return out;
  }

  mapToUI(
    source: LabrumAndRibbonsDiagnosisPresetApiModel,
    out: LabrumAndRibbonsDiagnosisPresetUiModel
  ): LabrumAndRibbonsDiagnosisPresetUiModel {
    out = automapper.map(
      'LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_ApiModel',
      'LabrumAndRibbonsDiagnosisPresets_ShoulderMRT_UiModel',
      source
    );

    return out;
  }
}
