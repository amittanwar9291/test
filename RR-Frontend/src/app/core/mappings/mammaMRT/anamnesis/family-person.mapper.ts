import { Injectable } from '@angular/core';

import { FamilyPersonApi } from '@models/mammaMRT/api/anamnesis/family-person-api.model';
import { FamilyPersonUi } from '@models/mammaMRT/ui/anamnesis/family-person-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class FamilyPersonMapper implements IMapper<FamilyPersonApi, FamilyPersonUi> {
  constructor(public enumMapper: EnumMapper, private monthYearMapper: MonthYearMapper) {
    automapper.createMap('FamilyPerson_MammaMRT_UiModel', 'FamilyPerson_MammaMRT_ApiModel').convertToType(FamilyPersonApi);
    automapper.createMap('FamilyPerson_MammaMRT_ApiModel', 'FamilyPerson_MammaMRT_UiModel').convertToType(FamilyPersonUi);
  }
  mapToAPI(source: FamilyPersonUi, out: FamilyPersonApi): FamilyPersonApi {
    out = automapper.map('FamilyPerson_MammaMRT_UiModel', 'FamilyPerson_MammaMRT_ApiModel', source);

    out.ownAnamnesisMonth = this.monthYearMapper.mapToApi(source.ownAnamnesisDate);
    out.ownAnamnesisYear = source.ownAnamnesisDate.year;

    out.breastCarcinomaAge = Number(source.breastCarcinomaAge);
    out.ovarianCancerAge = Number(source.ovarianCancerAge);

    out.breastLocation = this.enumMapper.mapToString(source.breastLocation);

    return out;
  }
  mapToUI(source: FamilyPersonApi, out: FamilyPersonUi): FamilyPersonUi {
    out = automapper.map('FamilyPerson_MammaMRT_ApiModel', 'FamilyPerson_MammaMRT_UiModel', source);

    out.ownAnamnesisDate.month = source.ownAnamnesisMonth;
    out.ownAnamnesisDate.year = source.ownAnamnesisYear;

    out.breastCarcinomaAge = source.breastCarcinomaAge?.toString();
    out.ovarianCancerAge = source.ovarianCancerAge?.toString();

    this.enumMapper.mapToObject(source.breastLocation, out.breastLocation);

    return out;
  }
}
