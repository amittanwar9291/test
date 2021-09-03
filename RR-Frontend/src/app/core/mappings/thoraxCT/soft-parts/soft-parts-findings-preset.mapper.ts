import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftPartsFindingPresetApiModel } from '@models/thoraxCT/api/soft-parts/soft-parts-finding-preset-api.model';
import { SoftPartsFindingPresetUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsFindingsPresetMapper implements IMapper<SoftPartsFindingPresetApiModel, SoftPartsFindingPresetUiModel> {
  constructor() {
    automapper
      .createMap('SoftPartsFindingPreset_ThoraxCT_UiModel', 'SoftPartsFindingPreset_ThoraxCT_ApiModel')
      .convertToType(SoftPartsFindingPresetApiModel);
    automapper
      .createMap('SoftPartsFindingPreset_ThoraxCT_ApiModel', 'SoftPartsFindingPreset_ThoraxCT_UiModel')
      .convertToType(SoftPartsFindingPresetUiModel);
  }

  mapToAPI(source: SoftPartsFindingPresetUiModel, out: SoftPartsFindingPresetApiModel): SoftPartsFindingPresetApiModel {
    out = automapper.map('SoftPartsFindingPreset_ThoraxCT_UiModel', 'SoftPartsFindingPreset_ThoraxCT_ApiModel', source);
    return out;
  }

  mapToUI(source: SoftPartsFindingPresetApiModel, out: SoftPartsFindingPresetUiModel): SoftPartsFindingPresetUiModel {
    out = automapper.map('SoftPartsFindingPreset_ThoraxCT_ApiModel', 'SoftPartsFindingPreset_ThoraxCT_UiModel', source);
    return out;
  }
}
