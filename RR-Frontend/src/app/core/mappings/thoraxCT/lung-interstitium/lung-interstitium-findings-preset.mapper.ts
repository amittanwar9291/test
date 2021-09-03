import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LungInterstitiumFindingPresetApiModel } from '@models/thoraxCT/api/lung-interstitium/lung-interstitium-finding-preset-api.model';
import { LungInterstitiumFindingPresetUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LungInterstitiumFindingsPresetMapper
  implements IMapper<LungInterstitiumFindingPresetApiModel, LungInterstitiumFindingPresetUiModel> {
  constructor() {
    automapper
      .createMap('LungInterstitiumFindingPreset_ThoraxCT_UiModel', 'LungInterstitiumFindingPreset_ThoraxCT_ApiModel')
      .convertToType(LungInterstitiumFindingPresetApiModel);
    automapper
      .createMap('LungInterstitiumFindingPreset_ThoraxCT_ApiModel', 'LungInterstitiumFindingPreset_ThoraxCT_UiModel')
      .convertToType(LungInterstitiumFindingPresetUiModel);
  }

  mapToAPI(
    source: LungInterstitiumFindingPresetUiModel,
    out: LungInterstitiumFindingPresetApiModel
  ): LungInterstitiumFindingPresetApiModel {
    out = automapper.map('LungInterstitiumFindingPreset_ThoraxCT_UiModel', 'LungInterstitiumFindingPreset_ThoraxCT_ApiModel', source);
    return out;
  }

  mapToUI(source: LungInterstitiumFindingPresetApiModel, out: LungInterstitiumFindingPresetUiModel): LungInterstitiumFindingPresetUiModel {
    out = automapper.map('LungInterstitiumFindingPreset_ThoraxCT_ApiModel', 'LungInterstitiumFindingPreset_ThoraxCT_UiModel', source);
    return out;
  }
}
