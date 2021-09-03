import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisIndicationFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { AnamnesisIndicationFindingApiModel } from '@models/handMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisIndicationMapper implements IMapper<AnamnesisIndicationFindingApiModel, AnamnesisIndicationFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('AnamnesisIndicationFinding_HandMRT_ApiModel', 'AnamnesisIndicationFinding_HandMRT_UiModel')
      .convertToType(AnamnesisIndicationFindingUiModel);
    automapper
      .createMap('AnamnesisIndicationFinding_HandMRT_UiModel', 'AnamnesisIndicationFinding_HandMRT_ApiModel')
      .convertToType(AnamnesisIndicationFindingApiModel);
  }

  mapToAPI(source: AnamnesisIndicationFindingUiModel, out: AnamnesisIndicationFindingApiModel): AnamnesisIndicationFindingApiModel {
    out = automapper.map('AnamnesisIndicationFinding_HandMRT_UiModel', 'AnamnesisIndicationFinding_HandMRT_ApiModel', source);
    out.monthOfTrauma = this.monthYearMapper.mapToApi(source.periodTrauma);
    out.yearOfTrauma = source.periodTrauma.year;
    out.indicationType = source.findingType;

    return out;
  }

  mapToUI(source: AnamnesisIndicationFindingApiModel, out: AnamnesisIndicationFindingUiModel): AnamnesisIndicationFindingUiModel {
    out = automapper.map('AnamnesisIndicationFinding_HandMRT_ApiModel', 'AnamnesisIndicationFinding_HandMRT_UiModel', source);
    out.periodTrauma.month = source.monthOfTrauma;
    out.periodTrauma.year = source.yearOfTrauma;
    out.findingType = source.indicationType;

    return out;
  }
}
