import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { CapsuleAndRibbonsFindingApiModel } from '@models/handMRT/api/capsule-and-ribbons/capsule-and-ribbons-finding-api.model';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndRibbonsFindingMapper implements IMapper<CapsuleAndRibbonsFindingApiModel, CapsuleAndRibbonsFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('CapsuleAndRibbonsFinding_HandMRT_ApiModel', 'CapsuleAndRibbonsFinding_HandMRT_UiModel')
      .convertToType(CapsuleAndRibbonsFindingUiModel);
    automapper
      .createMap('CapsuleAndRibbonsFinding_HandMRT_UiModel', 'CapsuleAndRibbonsFinding_HandMRT_ApiModel')
      .convertToType(CapsuleAndRibbonsFindingApiModel);
  }

  mapToAPI(source: CapsuleAndRibbonsFindingUiModel, out: CapsuleAndRibbonsFindingApiModel): CapsuleAndRibbonsFindingApiModel {
    out = automapper.map('CapsuleAndRibbonsFinding_HandMRT_UiModel', 'CapsuleAndRibbonsFinding_HandMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: CapsuleAndRibbonsFindingApiModel, out: CapsuleAndRibbonsFindingUiModel): CapsuleAndRibbonsFindingUiModel {
    out = automapper.map('CapsuleAndRibbonsFinding_HandMRT_ApiModel', 'CapsuleAndRibbonsFinding_HandMRT_UiModel', source);

    return out;
  }
}
