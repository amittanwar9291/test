import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { BonesPresetApiModel } from '@models/spineCT/api/bones/bones-preset-api.model';
import { BonesPresetUiModel } from '@models/spineCT/ui/bones/bones-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpineCTBonesPresetMapper implements IMapper<BonesPresetApiModel, BonesPresetUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('BonesPreset_SpineCT_ApiModel', 'BonesPreset_SpineCT_UiModel').convertToType(BonesPresetUiModel);
    automapper.createMap('BonesPreset_SpineCT_UiModel', 'BonesPreset_SpineCT_ApiModel').convertToType(BonesPresetApiModel);
  }

  mapToAPI(source: BonesPresetUiModel, out: BonesPresetApiModel): BonesPresetApiModel {
    out = automapper.map('BonesPreset_SpineCT_UiModel', 'BonesPreset_SpineCT_ApiModel', source);

    return out;
  }

  mapToUI(source: BonesPresetApiModel, out: BonesPresetUiModel): BonesPresetUiModel {
    out = automapper.map('BonesPreset_SpineCT_ApiModel', 'BonesPreset_SpineCT_UiModel', source);

    return out;
  }
}
