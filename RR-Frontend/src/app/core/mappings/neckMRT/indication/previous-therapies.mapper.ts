import { Injectable } from '@angular/core';
import { PreviousTherapyApiModel } from '@models/neckMRT/api/indication/previous-therapy-api.model';
import { PreviousTherapyUiModel } from '@models/neckMRT/ui/indication/previous-therapy-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class PreviousTherapiesMapper implements IMapper<PreviousTherapyApiModel, PreviousTherapyUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper.createMap('PreviousTherapies_NeckMRT_UiModel', 'PreviousTherapies_NeckMRT_ApiModel').convertToType(PreviousTherapyApiModel);
    automapper.createMap('PreviousTherapies_NeckMRT_ApiModel', 'PreviousTherapies_NeckMRT_UiModel').convertToType(PreviousTherapyUiModel);
  }

  mapToAPI(source: PreviousTherapyUiModel, out: PreviousTherapyApiModel): PreviousTherapyApiModel {
    out = automapper.map('PreviousTherapies_NeckMRT_UiModel', 'PreviousTherapies_NeckMRT_ApiModel', source);

    out.monthOfPreviousTherapy = this.monthYearMapper.mapToApi(source.dateOfPreviousTherapy);
    out.yearOfPreviousTherapy = source.dateOfPreviousTherapy.year;

    return out;
  }

  mapToUI(source: PreviousTherapyApiModel, out: PreviousTherapyUiModel): PreviousTherapyUiModel {
    out = automapper.map('PreviousTherapies_NeckMRT_ApiModel', 'PreviousTherapies_NeckMRT_UiModel', source);

    out.dateOfPreviousTherapy.month = source.monthOfPreviousTherapy;
    out.dateOfPreviousTherapy.year = source.yearOfPreviousTherapy;

    return out;
  }
}
