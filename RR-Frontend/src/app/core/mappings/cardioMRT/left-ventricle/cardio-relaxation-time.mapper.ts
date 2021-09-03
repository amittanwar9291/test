import { IMapper } from '@interfaces/mapper.interface';

import { CardioRelaxationTimeApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-relaxation-time-api.model';
import { CardioRelaxationTimeUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-relaxation-time-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { Injectable } from '@angular/core';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class CardioRelaxationTimeMapper implements IMapper<CardioRelaxationTimeApiModel, CardioRelaxationTimeUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('RelaxationTime_CardioMRT_ApiModel', 'RelaxationTime_CardioMRT_UiModel')
      .convertToType(CardioRelaxationTimeUiModel);
    automapper
      .createMap('RelaxationTime_CardioMRT_UiModel', 'RelaxationTime_CardioMRT_ApiModel')
      .convertToType(CardioRelaxationTimeApiModel);
  }

  mapToAPI(source: CardioRelaxationTimeUiModel, out: CardioRelaxationTimeApiModel): CardioRelaxationTimeApiModel {
    out = automapper.map('RelaxationTime_CardioMRT_UiModel', 'RelaxationTime_CardioMRT_ApiModel', source);
    out.localizer = this.enumMapper.mapToString(source.localizer);

    return out;
  }

  mapToUI(source: CardioRelaxationTimeApiModel, out: CardioRelaxationTimeUiModel): CardioRelaxationTimeUiModel {
    out = automapper.map('RelaxationTime_CardioMRT_ApiModel', 'RelaxationTime_CardioMRT_UiModel', source);
    this.enumMapper.mapToObject(source.localizer, out.localizer);

    return out;
  }
}
