import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MediastinumFindingPresetUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-preset-ui.model';
import { MedistenumFindingPresetApiModel } from '@models/thoraxCT/api/mediastinum/medistenum-finding-preset-api.model';

@Injectable({
  providedIn: 'root'
})
export class MediastinumFindingPresetMapper implements IMapper<MedistenumFindingPresetApiModel, MediastinumFindingPresetUiModel> {
  constructor() {
    automapper
      .createMap('MediastinumFindingPreset_ThoraxCT_ApiModel', 'MediastinumFindingPreset_ThoraxCT_UiModel')
      .convertToType(MediastinumFindingPresetUiModel);
    automapper
      .createMap('MediastinumFindingPreset_ThoraxCT_UiModel', 'MediastinumFindingPreset_ThoraxCT_ApiModel')
      .convertToType(MedistenumFindingPresetApiModel);
  }

  mapToAPI(source: MediastinumFindingPresetUiModel, out: MedistenumFindingPresetApiModel): MedistenumFindingPresetApiModel {
    out = automapper.map('MediastinumFindingPreset_ThoraxCT_UiModel', 'MediastinumFindingPreset_ThoraxCT_ApiModel', source);
    return out;
  }

  mapToUI(source: MedistenumFindingPresetApiModel, out: MediastinumFindingPresetUiModel): MediastinumFindingPresetUiModel {
    out = automapper.map('MediastinumFindingPreset_ThoraxCT_ApiModel', 'MediastinumFindingPreset_ThoraxCT_UiModel', source);
    return out;
  }
}
