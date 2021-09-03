import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PreviousInterventionApiModel } from '@models/spineCT/api/anamnesis/previous-intervention-api.model';
import { PreviousInterventionUiModel } from '@models/spineCT/ui/anamnesis/previous-intervention-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTPreviousInterventionMapper implements IMapper<PreviousInterventionApiModel, PreviousInterventionUiModel> {
  constructor(private enumMapper: EnumMapper, private monthYearMapper: MonthYearMapper) {
    automapper.createMap('PreviousInterventionApiModel', 'PreviousInterventionUiModel').convertToType(PreviousInterventionUiModel);
    automapper.createMap('PreviousInterventionUiModel', 'PreviousInterventionApiModel').convertToType(PreviousInterventionApiModel);
  }

  mapToAPI(source: PreviousInterventionUiModel, out: PreviousInterventionApiModel): PreviousInterventionApiModel {
    out = automapper.map('PreviousInterventionUiModel', 'PreviousInterventionApiModel', source);
    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);

    out.monthOfLumbarPuncture = this.monthYearMapper.mapToApi(source.dateOfLumbarPuncture);
    out.yearOfLumbarPuncture = source.dateOfLumbarPuncture.year;

    return out;
  }

  mapToUI(source: PreviousInterventionApiModel, out: PreviousInterventionUiModel): PreviousInterventionUiModel {
    out = automapper.map('PreviousInterventionApiModel', 'PreviousInterventionUiModel', source);
    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);

    out.dateOfLumbarPuncture.month = source.monthOfLumbarPuncture;
    out.dateOfLumbarPuncture.year = source.yearOfLumbarPuncture;

    return out;
  }
}
