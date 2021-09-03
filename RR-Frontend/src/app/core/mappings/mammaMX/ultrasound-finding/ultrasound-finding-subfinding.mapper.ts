import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { UltrasoundFindingSubfindingApiModel } from '@models/mammaMX/api/ultrasound-finding/ultrasound-finding-subfinding-api.model';
import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class UltrasoundFindingSubfindingMapper implements IMapper<UltrasoundFindingSubfindingApiModel, UltrasoundFindingSubfindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('UltrasoundFindingSubfinding_MammaMX_UiModel', 'UltrasoundFindingSubfinding_MammaMX_ApiModel')
      .convertToType(UltrasoundFindingSubfindingApiModel);
    automapper
      .createMap('UltrasoundFindingSubfinding_MammaMX_ApiModel', 'UltrasoundFindingSubfinding_MammaMX_UiModel')
      .convertToType(UltrasoundFindingSubfindingUiModel);
  }

  mapToAPI(source: UltrasoundFindingSubfindingUiModel, out: UltrasoundFindingSubfindingApiModel): UltrasoundFindingSubfindingApiModel {
    out = automapper.map('UltrasoundFindingSubfinding_MammaMX_UiModel', 'UltrasoundFindingSubfinding_MammaMX_ApiModel', source);
    out.location = this.enumMapper.mapToString(source.location);

    return out;
  }

  mapToUI(source: UltrasoundFindingSubfindingApiModel, out: UltrasoundFindingSubfindingUiModel): UltrasoundFindingSubfindingUiModel {
    out = automapper.map('UltrasoundFindingSubfinding_MammaMX_ApiModel', 'UltrasoundFindingSubfinding_MammaMX_UiModel', source);
    this.enumMapper.mapToObject(source.location, out.location);

    return out;
  }
}
