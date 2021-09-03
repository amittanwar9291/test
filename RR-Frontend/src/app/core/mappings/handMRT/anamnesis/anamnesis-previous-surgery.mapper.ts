import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisPreviousSurgeriesFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-previous-surgeries-finding-ui.model';
import { AnamnesisPreviousSurgeriesFindingApiModel } from '@models/handMRT/api/anamnesis/anamnesis-previous-surgeries-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisPreviousSurgeryMapper
  implements IMapper<AnamnesisPreviousSurgeriesFindingApiModel, AnamnesisPreviousSurgeriesFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('AnamnesisPreviousSurgeriesFinding_HandMRT_ApiModel', 'AnamnesisPreviousSurgeriesFinding_HandMRT_UiModel')
      .convertToType(AnamnesisPreviousSurgeriesFindingUiModel);
    automapper
      .createMap('AnamnesisPreviousSurgeriesFinding_HandMRT_UiModel', 'AnamnesisPreviousSurgeriesFinding_HandMRT_ApiModel')
      .convertToType(AnamnesisPreviousSurgeriesFindingApiModel);
  }

  mapToAPI(
    source: AnamnesisPreviousSurgeriesFindingUiModel,
    out: AnamnesisPreviousSurgeriesFindingApiModel
  ): AnamnesisPreviousSurgeriesFindingApiModel {
    out = automapper.map('AnamnesisPreviousSurgeriesFinding_HandMRT_UiModel', 'AnamnesisPreviousSurgeriesFinding_HandMRT_ApiModel', source);
    out.monthOfSurgery = this.monthYearMapper.mapToApi(source.periodSurgery);
    out.yearOfSurgery = source.periodSurgery.year;
    out.previousSurgeriesType = source.findingType;

    return out;
  }

  mapToUI(
    source: AnamnesisPreviousSurgeriesFindingApiModel,
    out: AnamnesisPreviousSurgeriesFindingUiModel
  ): AnamnesisPreviousSurgeriesFindingUiModel {
    out = automapper.map('AnamnesisPreviousSurgeriesFinding_HandMRT_ApiModel', 'AnamnesisPreviousSurgeriesFinding_HandMRT_UiModel', source);
    out.periodSurgery.month = source.monthOfSurgery;
    out.periodSurgery.year = source.yearOfSurgery;
    out.findingType = source.previousSurgeriesType;

    return out;
  }
}
