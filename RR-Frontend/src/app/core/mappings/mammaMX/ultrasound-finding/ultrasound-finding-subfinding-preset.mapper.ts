import { UltrasoundFindingSubfindingPresetApiModel } from '@models/mammaMX/api/ultrasound-finding/ultrasound-finding-subfinding-preset-api.model';
import { UltrasoundFindingSubfindingPresetUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-preset-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UltrasoundFindingSubfindingPresetMapper
  implements IMapper<UltrasoundFindingSubfindingPresetApiModel, UltrasoundFindingSubfindingPresetUiModel> {
  constructor() {
    {
      automapper
        .createMap('UltrasoundFindingSubfindingPreset_MammaMX_ApiModel', 'UltrasoundFindingSubfindingPreset_MammaMX_UiModel')
        .convertToType(UltrasoundFindingSubfindingPresetUiModel);
      automapper
        .createMap('UltrasoundFindingSubfindingPreset_MammaMX_UiModel', 'UltrasoundFindingSubfindingPreset_MammaMX_ApiModel')
        .convertToType(UltrasoundFindingSubfindingPresetApiModel);
    }
  }

  mapToAPI(
    source: UltrasoundFindingSubfindingPresetUiModel,
    out: UltrasoundFindingSubfindingPresetApiModel
  ): UltrasoundFindingSubfindingPresetApiModel {
    out = automapper.map('UltrasoundFindingSubfindingPreset_MammaMX_UiModel', 'UltrasoundFindingSubfindingPreset_MammaMX_ApiModel', source);

    return out;
  }
  mapToUI(
    source: UltrasoundFindingSubfindingPresetApiModel,
    out: UltrasoundFindingSubfindingPresetUiModel
  ): UltrasoundFindingSubfindingPresetUiModel {
    out = automapper.map('UltrasoundFindingSubfindingPreset_MammaMX_UiModel', 'UltrasoundFindingSubfindingPreset_MammaMX_ApiModel', source);

    return out;
  }
}
