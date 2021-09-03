import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PreviousInterventionsTherapiesFindingApiModel } from '@models/headMRT/api/anamnesis/previous-interventions-therapies-finding-api.model';
import { PreviousInterventionsTherapiesFindingUiModel } from '@models/headMRT/ui/anamnesis/previous-interventions-therapies-finding-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class PreviousInterventionsTherapiesFindingMapper
  implements IMapper<PreviousInterventionsTherapiesFindingApiModel, PreviousInterventionsTherapiesFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('PreviousInterventionsTherapiesFinding_HeadMRT_UiModel', 'PreviousInterventionsTherapiesFinding_HeadMRT_ApiModel')
      .convertToType(PreviousInterventionsTherapiesFindingApiModel);
    automapper
      .createMap('PreviousInterventionsTherapiesFinding_HeadMRT_ApiModel', 'PreviousInterventionsTherapiesFinding_HeadMRT_UiModel')
      .convertToType(PreviousInterventionsTherapiesFindingUiModel);
  }

  mapToAPI(
    source: PreviousInterventionsTherapiesFindingUiModel,
    out: PreviousInterventionsTherapiesFindingApiModel
  ): PreviousInterventionsTherapiesFindingApiModel {
    out = automapper.map(
      'PreviousInterventionsTherapiesFinding_HeadMRT_UiModel',
      'PreviousInterventionsTherapiesFinding_HeadMRT_ApiModel',
      source
    );

    out.month = this.monthYearMapper.mapToApi(source.date);
    out.year = source.date.year;

    return out;
  }

  mapToUI(
    source: PreviousInterventionsTherapiesFindingApiModel,
    out: PreviousInterventionsTherapiesFindingUiModel
  ): PreviousInterventionsTherapiesFindingUiModel {
    out = automapper.map(
      'PreviousInterventionsTherapiesFinding_HeadMRT_ApiModel',
      'PreviousInterventionsTherapiesFinding_HeadMRT_UiModel',
      source
    );

    out.date.month = source.month;
    out.date.year = source.year;

    return out;
  }
}
