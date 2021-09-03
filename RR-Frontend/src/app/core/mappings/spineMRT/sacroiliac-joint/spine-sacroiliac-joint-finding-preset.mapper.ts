import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SpineSacroiliacJointFindingPresetApiModel } from '@models/spineMRT/api/sacroiliac-joint/spine-sacroiliac-joint-finding-preset-api.model';
import { SpineSacroiliacJointFindingPresetUiModel } from '@models/spineMRT/ui/sacroiliac-joint/spine-sacroiliac-joint-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpineSacroiliacJointFindingPresetMapper
  implements IMapper<SpineSacroiliacJointFindingPresetApiModel, SpineSacroiliacJointFindingPresetUiModel> {
  constructor() {
    automapper
      .createMap('SpineSacroiliacJointFindingPreset_SpineMRT_ApiModel', 'SpineSacroiliacJointFindingPreset_SpineMRT_UiModel')
      .convertToType(SpineSacroiliacJointFindingPresetUiModel);
    automapper
      .createMap('SpineSacroiliacJointFindingPreset_SpineMRT_UiModel', 'SpineSacroiliacJointFindingPreset_SpineMRT_ApiModel')
      .convertToType(SpineSacroiliacJointFindingPresetApiModel);
  }

  mapToAPI(
    source: SpineSacroiliacJointFindingPresetUiModel,
    out: SpineSacroiliacJointFindingPresetApiModel
  ): SpineSacroiliacJointFindingPresetApiModel {
    out = automapper.map(
      'SpineSacroiliacJointFindingPreset_SpineMRT_UiModel',
      'SpineSacroiliacJointFindingPreset_SpineMRT_ApiModel',
      source
    );

    return out;
  }

  mapToUI(
    source: SpineSacroiliacJointFindingPresetApiModel,
    out: SpineSacroiliacJointFindingPresetUiModel
  ): SpineSacroiliacJointFindingPresetUiModel {
    out = automapper.map(
      'SpineSacroiliacJointFindingPreset_SpineMRT_ApiModel',
      'SpineSacroiliacJointFindingPreset_SpineMRT_UiModel',
      source
    );

    return out;
  }
}
