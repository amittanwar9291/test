import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingApiModel } from '@models/thoraxCT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingsMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('BonesFinding_ThoraxCT_UiModel', 'BonesFinding_ThoraxCT_ApiModel').convertToType(BonesFindingApiModel);
    automapper.createMap('BonesFinding_ThoraxCT_ApiModel', 'BonesFinding_ThoraxCT_UiModel').convertToType(BonesFindingUiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_ThoraxCT_UiModel', 'BonesFinding_ThoraxCT_ApiModel', source);
    out.vertebralColumnLocalization = this.enumMapper.mapToString(source.vertebralColumnLocalization);
    out.vertebralBodyLocalization = this.enumMapper.mapToString(source.vertebralBodyLocalization);
    out.ribLocation = this.enumMapper.mapToString(source.ribLocation);
    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_ThoraxCT_ApiModel', 'BonesFinding_ThoraxCT_UiModel', source);
    this.enumMapper.mapToObject(source.vertebralColumnLocalization, out.vertebralColumnLocalization);
    this.enumMapper.mapToObject(source.vertebralBodyLocalization, out.vertebralBodyLocalization);
    this.enumMapper.mapToObject(source.ribLocation, out.ribLocation);
    return out;
  }
}
