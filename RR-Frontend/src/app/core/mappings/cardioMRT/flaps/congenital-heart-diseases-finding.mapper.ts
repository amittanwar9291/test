import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CongenitalHeartDiseasesFindingApiModel } from '@models/cardioMRT/api/flaps/congenital-heart-diseases-finding-api.model';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CongenitalHeartDiseasesFindingMapper
  implements IMapper<CongenitalHeartDiseasesFindingApiModel, CongenitalHeartDiseasesFindingUiModel> {
  constructor() {
    automapper
      .createMap('CongenitalHeartDiseasesFinding_CardioMRT_UiModel', 'CongenitalHeartDiseasesFinding_CardioMRT_ApiModel')
      .convertToType(CongenitalHeartDiseasesFindingApiModel);
    automapper
      .createMap('CongenitalHeartDiseasesFinding_CardioMRT_ApiModel', 'CongenitalHeartDiseasesFinding_CardioMRT_UiModel')
      .convertToType(CongenitalHeartDiseasesFindingUiModel);
  }

  mapToAPI(
    source: CongenitalHeartDiseasesFindingUiModel,
    out: CongenitalHeartDiseasesFindingApiModel
  ): CongenitalHeartDiseasesFindingApiModel {
    out = automapper.map('CongenitalHeartDiseasesFinding_CardioMRT_UiModel', 'CongenitalHeartDiseasesFinding_CardioMRT_ApiModel', source);

    return out;
  }

  mapToUI(
    source: CongenitalHeartDiseasesFindingApiModel,
    out: CongenitalHeartDiseasesFindingUiModel
  ): CongenitalHeartDiseasesFindingUiModel {
    out = automapper.map('CongenitalHeartDiseasesFinding_CardioMRT_ApiModel', 'CongenitalHeartDiseasesFinding_CardioMRT_UiModel', source);

    return out;
  }
}
