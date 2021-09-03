import { MammographyFindingFindingPresetApiModel } from '@models/mammaMX/api/mammography-finding/mammography-finding-finding-preset-api.model';
import { MammographyFindingFindingPresetUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-preset-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MammographyFindingFindingPresetMapper
  implements IMapper<MammographyFindingFindingPresetApiModel, MammographyFindingFindingPresetUiModel> {
  constructor() {
    {
      automapper
        .createMap('MammographyFindingFindingPreset_MammaMX_ApiModel', 'MammographyFindingFindingPreset_MammaMX_UiModel')
        .convertToType(MammographyFindingFindingPresetUiModel);
      automapper
        .createMap('MammographyFindingFindingPreset_MammaMX_UiModel', 'MammographyFindingFindingPreset_MammaMX_ApiModel')
        .convertToType(MammographyFindingFindingPresetApiModel);
    }
  }

  mapToAPI(
    source: MammographyFindingFindingPresetUiModel,
    out: MammographyFindingFindingPresetApiModel
  ): MammographyFindingFindingPresetApiModel {
    out = automapper.map('MammographyFindingFindingPreset_MammaMX_UiModel', 'MammographyFindingFindingPreset_MammaMX_ApiModel', source);

    return out;
  }
  mapToUI(
    source: MammographyFindingFindingPresetApiModel,
    out: MammographyFindingFindingPresetUiModel
  ): MammographyFindingFindingPresetUiModel {
    out = automapper.map('MammographyFindingFindingPreset_MammaMX_UiModel', 'MammographyFindingFindingPreset_MammaMX_ApiModel', source);

    return out;
  }
}
