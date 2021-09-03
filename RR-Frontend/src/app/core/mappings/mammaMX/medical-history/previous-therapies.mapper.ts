import { Injectable } from '@angular/core';

import { PreviousTherapiesApi } from '@models/mammaMX/api/medical-history/previous-therapies-api.model';
import { PreviousTherapiesUi } from '@models/mammaMX/ui/medical-history/previous-therapies-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class PreviousTherapiesMapper implements IMapper<PreviousTherapiesApi, PreviousTherapiesUi> {
  constructor(private enumMapper: EnumMapper, private monthYearMapper: MonthYearMapper) {
    automapper.createMap('PreviousTherapies_MammaMX_UiModel', 'PreviousTherapies_MammaMX_ApiModel').convertToType(PreviousTherapiesApi);
    automapper.createMap('PreviousTherapies_MammaMX_ApiModel', 'PreviousTherapies_MammaMX_UiModel').convertToType(PreviousTherapiesUi);
  }

  mapToAPI(source: PreviousTherapiesUi, out: PreviousTherapiesApi): PreviousTherapiesApi {
    out = automapper.map('PreviousTherapies_MammaMX_UiModel', 'PreviousTherapies_MammaMX_ApiModel', source);

    out.theraphyMonth = this.monthYearMapper.mapToApi(source.monthyear);
    out.theraphyYear = source.monthyear.year;

    out.breastLocation = this.enumMapper.mapToString(source.breastLocation);

    out.leftReconstructionLocalization = source.reconstruction.leftReconstructionLocalization;
    out.rightReconstructionLocalization = source.reconstruction.rightReconstructionLocalization;

    return out;
  }

  mapToUI(source: PreviousTherapiesApi, out: PreviousTherapiesUi): PreviousTherapiesUi {
    out = automapper.map('PreviousTherapies_MammaMX_ApiModel', 'PreviousTherapies_MammaMX_UiModel', source);

    out.monthyear.month = source.theraphyMonth;
    out.monthyear.year = source.theraphyYear;

    this.enumMapper.mapToObject(source.breastLocation, out.breastLocation);

    out.reconstruction.leftReconstructionLocalization = source.leftReconstructionLocalization;
    out.reconstruction.rightReconstructionLocalization = source.rightReconstructionLocalization;

    return out;
  }
}
