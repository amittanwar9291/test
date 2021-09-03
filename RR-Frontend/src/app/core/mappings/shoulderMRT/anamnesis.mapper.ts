import { Injectable } from '@angular/core';

import { AnamnesisApi } from '@models/shoulderMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUI } from '@models/shoulderMRT/ui/anamnesis/anamnesis-ui.model';

import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApi, AnamnesisUI> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper.createMap('Anamnesis_ShoulderMRT_UiModel', 'Anamnesis_ShoulderMRT_ApiModel').convertToType(AnamnesisApi);
    automapper.createMap('Anamnesis_ShoulderMRT_ApiModel', 'Anamnesis_ShoulderMRT_UiModel').convertToType(AnamnesisUI);
  }

  mapToAPI(source: AnamnesisUI, out: AnamnesisApi): AnamnesisApi {
    out = automapper.map('Anamnesis_ShoulderMRT_UiModel', 'Anamnesis_ShoulderMRT_ApiModel', source);

    out.monthOfLuxation = this.monthYearMapper.mapToApi(source.dateOfLuxation);
    out.yearOfLuxation = source.dateOfLuxation.year;

    out.monthOfFracture = this.monthYearMapper.mapToApi(source.dateOfFracture);
    out.yearOfFracture = source.dateOfFracture.year;

    out.monthOfMRIPreliminaryExamination = this.monthYearMapper.mapToApi(source.dateOfMRIPreliminaryExamination);
    out.yearOfMRIPreliminaryExamination = source.dateOfMRIPreliminaryExamination.year;

    return out;
  }

  mapToUI(source: AnamnesisApi, out: AnamnesisUI): AnamnesisUI {
    out = automapper.map('Anamnesis_ShoulderMRT_ApiModel', 'Anamnesis_ShoulderMRT_UiModel', source);

    out.dateOfLuxation.month = source.monthOfLuxation;
    out.dateOfLuxation.year = source.yearOfLuxation;

    out.dateOfFracture.month = source.monthOfFracture;
    out.dateOfFracture.year = source.yearOfFracture;

    out.dateOfMRIPreliminaryExamination.month = source.monthOfMRIPreliminaryExamination;
    out.dateOfMRIPreliminaryExamination.year = source.yearOfMRIPreliminaryExamination;

    return out;
  }
}
