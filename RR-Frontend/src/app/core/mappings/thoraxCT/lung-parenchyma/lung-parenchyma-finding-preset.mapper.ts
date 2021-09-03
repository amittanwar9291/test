import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { LungParenchymaFindingPresetApiModel } from '@models/thoraxCT/api/lung-parenchyma/lung-parenchyma-finding-preset-api.model';
import { LungParenchymaFindingPresetUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaFindingPresetMapper implements IMapper<LungParenchymaFindingPresetApiModel, LungParenchymaFindingPresetUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('LungParenchymaFindingPreset_ThoraxCT_ApiModel', 'LungParenchymaFindingPreset_ThoraxCT_UiModel')
      .convertToType(LungParenchymaFindingPresetUiModel);
    automapper
      .createMap('LungParenchymaFindingPreset_ThoraxCT_UiModel', 'LungParenchymaFindingPreset_ThoraxCT_ApiModel')
      .convertToType(LungParenchymaFindingPresetApiModel);
  }

  mapToAPI(source: LungParenchymaFindingPresetUiModel, out: LungParenchymaFindingPresetApiModel): LungParenchymaFindingPresetApiModel {
    out = automapper.map('LungParenchymaFindingPreset_ThoraxCT_UiModel', 'LungParenchymaFindingPreset_ThoraxCT_ApiModel', source);

    out.mainCharacteristicsLungsFlapsLocation = this.enumMapper.mapToString(source.mainCharacteristicsLungsFlapsLocation);

    return out;
  }

  mapToUI(source: LungParenchymaFindingPresetApiModel, out: LungParenchymaFindingPresetUiModel): LungParenchymaFindingPresetUiModel {
    out = automapper.map('LungParenchymaFindingPreset_ThoraxCT_ApiModel', 'LungParenchymaFindingPreset_ThoraxCT_UiModel', source);

    this.enumMapper.mapToObject(source.mainCharacteristicsLungsFlapsLocation, out.mainCharacteristicsLungsFlapsLocation);

    return out;
  }
}
