import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

import { AnamnesisFindingApiModel } from '@models/elbowMRT/api/anamnesis/anamnesis-finding-api.model';
import { AnamnesisFindingUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisFindingMapper implements IMapper<AnamnesisFindingApiModel, AnamnesisFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('IndicationFinding_ElbowMRT_UiModel', 'IndicationFinding_ElbowMRT_ApiModel')
      .convertToType(AnamnesisFindingApiModel);
    automapper
      .createMap('IndicationFinding_ElbowMRT_ApiModel', 'IndicationFinding_ElbowMRT_UiModel')
      .convertToType(AnamnesisFindingUiModel);
  }

  mapToAPI(source: AnamnesisFindingUiModel, out: AnamnesisFindingApiModel): AnamnesisFindingApiModel {
    out = automapper.map('IndicationFinding_ElbowMRT_UiModel', 'IndicationFinding_ElbowMRT_ApiModel', source);

    out.traumaMonth = this.monthYearMapper.mapToApi(source.traumaDate);
    out.traumaYear = source.traumaDate.year;

    return out;
  }

  mapToUI(source: AnamnesisFindingApiModel, out: AnamnesisFindingUiModel): AnamnesisFindingUiModel {
    out = automapper.map('IndicationFinding_ElbowMRT_ApiModel', 'IndicationFinding_ElbowMRT_UiModel', source);

    out.traumaDate.month = source.traumaMonth;
    out.traumaDate.year = source.traumaYear;

    return out;
  }
}
