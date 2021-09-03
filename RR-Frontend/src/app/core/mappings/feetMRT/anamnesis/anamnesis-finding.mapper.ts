import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisIndicationFindingUiModel } from '@models/feetMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { AnamnesisIndicationFindingApiModel } from '@models/feetMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisFindingMapper implements IMapper<AnamnesisIndicationFindingApiModel, AnamnesisIndicationFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('AnamnesisIndicationFinding_FeetMRT_ApiModel', 'AnamnesisIndicationFinding_FeetMRT_UiModel')
      .convertToType(AnamnesisIndicationFindingUiModel);
    automapper
      .createMap('AnamnesisIndicationFinding_FeetMRT_UiModel', 'AnamnesisIndicationFinding_FeetMRT_ApiModel')
      .convertToType(AnamnesisIndicationFindingApiModel);
  }

  mapToAPI(source: AnamnesisIndicationFindingUiModel, out: AnamnesisIndicationFindingApiModel): AnamnesisIndicationFindingApiModel {
    out = automapper.map('AnamnesisIndicationFinding_FeetMRT_UiModel', 'AnamnesisIndicationFinding_FeetMRT_ApiModel', source);
    out.periodTraumaMonth = this.monthYearMapper.mapToApi(source.periodTrauma);
    out.periodTraumaYear = source.periodTrauma.year;
    out.indicationType = source.findingType;

    return out;
  }

  mapToUI(source: AnamnesisIndicationFindingApiModel, out: AnamnesisIndicationFindingUiModel): AnamnesisIndicationFindingUiModel {
    out = automapper.map('AnamnesisIndicationFinding_FeetMRT_ApiModel', 'AnamnesisIndicationFinding_FeetMRT_UiModel', source);
    out.periodTrauma.month = source.periodTraumaMonth;
    out.periodTrauma.year = source.periodTraumaYear;
    out.findingType = source.indicationType;

    return out;
  }
}
