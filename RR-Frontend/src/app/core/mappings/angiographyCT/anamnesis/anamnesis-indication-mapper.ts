import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { IndicationFindingApiModel } from '@models/angiographyCT/api/anamnesis/indication-finding-api.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class IndicationFindingMapper implements IMapper<IndicationFindingApiModel, IndicationFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('AnamnesisIndication_AngioCT_UiModel', 'AnamnesisIndication_AngioCT_ApiModel')
      .convertToType(IndicationFindingApiModel);
    automapper
      .createMap('AnamnesisIndication_AngioCT_ApiModel', 'AnamnesisIndication_AngioCT_UiModel')
      .convertToType(IndicationFindingUiModel);
  }

  mapToAPI(source: IndicationFindingUiModel, out: IndicationFindingApiModel): IndicationFindingApiModel {
    out = automapper.map('AnamnesisIndication_AngioCT_UiModel', 'AnamnesisIndication_AngioCT_ApiModel', source);

    out.onsetOfSymptomsYear = source.dateOnsetOfSymptoms.year;
    out.onsetOfSymptomsMonth = this.monthYearMapper.mapToApi(source.dateOnsetOfSymptoms);

    return out;
  }

  mapToUI(source: IndicationFindingApiModel, out: IndicationFindingUiModel): IndicationFindingUiModel {
    out = automapper.map('AnamnesisIndication_AngioCT_ApiModel', 'AnamnesisIndication_AngioCT_UiModel', source);

    out.dateOnsetOfSymptoms.year = source.onsetOfSymptomsYear;
    out.dateOnsetOfSymptoms.month = source.onsetOfSymptomsMonth;

    return out;
  }
}
