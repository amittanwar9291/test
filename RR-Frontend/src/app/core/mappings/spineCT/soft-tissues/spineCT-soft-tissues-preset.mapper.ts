import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { SoftTissuesPresetApiModel } from '@models/spineCT/api/soft-tissues/soft-tissues-preset-api.model';
import { SoftTissuesPresetUiModel } from '@models/spineCT/ui/soft-tissues/soft-tissues-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpineCTSoftTissuesPresetMapper implements IMapper<SoftTissuesPresetApiModel, SoftTissuesPresetUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('SoftTissuesPreset_SpineCT_ApiModel', 'SoftTissuesPreset_SpineCT_UiModel').convertToType(SoftTissuesPresetUiModel);
    automapper
      .createMap('SoftTissuesPreset_SpineCT_UiModel', 'SoftTissuesPreset_SpineCT_ApiModel')
      .convertToType(SoftTissuesPresetApiModel);
  }

  mapToAPI(source: SoftTissuesPresetUiModel, out: SoftTissuesPresetApiModel): SoftTissuesPresetApiModel {
    out = automapper.map('SoftTissuesPreset_SpineCT_UiModel', 'SoftTissuesPreset_SpineCT_ApiModel', source);

    return out;
  }

  mapToUI(source: SoftTissuesPresetApiModel, out: SoftTissuesPresetUiModel): SoftTissuesPresetUiModel {
    out = automapper.map('SoftTissuesPreset_SpineCT_ApiModel', 'SoftTissuesPreset_SpineCT_UiModel', source);

    return out;
  }
}
