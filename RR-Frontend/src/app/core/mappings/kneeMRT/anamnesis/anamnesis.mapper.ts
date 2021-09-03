import { Injectable } from '@angular/core';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

import { AnamnesisApiModel } from '@models/kneeMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/kneeMRT/ui/anamnesis/anamnesis-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(private enumMapper: EnumMapper, private monthYearMapper: MonthYearMapper) {
    automapper.createMap('Anamnesis_KneeMRT_UiModel', 'Anamnesis_KneeMRT_ApiModel').convertToType(AnamnesisApiModel);
    automapper.createMap('Anamnesis_KneeMRT_ApiModel', 'Anamnesis_KneeMRT_UiModel').convertToType(AnamnesisUiModel);
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_KneeMRT_UiModel', 'Anamnesis_KneeMRT_ApiModel', source);

    out.monthOfPeriodTrauma = this.monthYearMapper.mapToApi(source.dateOfTrauma);
    out.yearOfPeriodTrauma = source.dateOfTrauma.year;

    out.monthOfLuxation = this.monthYearMapper.mapToApi(source.dateOfLuxation);
    out.yearOfLuxation = source.dateOfLuxation.year;

    out.resectionLocation = this.enumMapper.mapToString(source.resectionLocation);
    out.sutureLocation = this.enumMapper.mapToString(source.sutureLocation);

    out.monthOfMRIPreliminaryExamination = this.monthYearMapper.mapToApi(source.dateOfMRIPreliminaryExamination);
    out.yearOfMRIPreliminaryExamination = source.dateOfMRIPreliminaryExamination.year;

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_KneeMRT_ApiModel', 'Anamnesis_KneeMRT_UiModel', source);

    out.dateOfTrauma.month = source.monthOfPeriodTrauma;
    out.dateOfTrauma.year = source.yearOfPeriodTrauma;

    out.dateOfLuxation.month = source.monthOfLuxation;
    out.dateOfLuxation.year = source.yearOfLuxation;

    this.enumMapper.mapToObject(source.resectionLocation, out.resectionLocation);
    this.enumMapper.mapToObject(source.sutureLocation, out.sutureLocation);

    out.dateOfMRIPreliminaryExamination.month = source.monthOfMRIPreliminaryExamination;
    out.dateOfMRIPreliminaryExamination.year = source.yearOfMRIPreliminaryExamination;

    return out;
  }
}
