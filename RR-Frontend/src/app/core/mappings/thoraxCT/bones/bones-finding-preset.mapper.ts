import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingPresetApiModel } from '@models/thoraxCT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/thoraxCT/ui/bones/bones-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingPresetMapper implements IMapper<BonesFindingPresetApiModel, BonesFindingPresetUiModel> {
  constructor() {
    automapper
      .createMap('BonesFindingPreset_ThoraxCT_UiModel', 'BonesFindingPreset_ThoraxCT_ApiModel')
      .convertToType(BonesFindingPresetApiModel);
    automapper
      .createMap('BonesFindingPreset_ThoraxCT_ApiModel', 'BonesFindingPreset_ThoraxCT_UiModel')
      .convertToType(BonesFindingPresetUiModel);
  }

  mapToAPI(source: BonesFindingPresetUiModel, out: BonesFindingPresetApiModel): BonesFindingPresetApiModel {
    out = automapper.map('BonesFindingPreset_ThoraxCT_UiModel', 'BonesFindingPreset_ThoraxCT_ApiModel', source);
    return out;
  }

  mapToUI(source: BonesFindingPresetApiModel, out: BonesFindingPresetUiModel): BonesFindingPresetUiModel {
    out = automapper.map('BonesFindingPreset_ThoraxCT_ApiModel', 'BonesFindingPreset_ThoraxCT_UiModel', source);
    return out;
  }
}
