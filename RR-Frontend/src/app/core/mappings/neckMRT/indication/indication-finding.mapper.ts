import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { IndicationFindingApiModel } from '@models/neckMRT/api/indication/indication-finding-api.model';
import { IndicationFindingUiModel } from '@models/neckMRT/ui/indication/indication-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class IndicationFindingMapper implements IMapper<IndicationFindingApiModel, IndicationFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('IndicationFinding_NeckMRT_UiModel', 'IndicationFinding_NeckMRT_ApiModel')
      .convertToType(IndicationFindingApiModel);
    automapper.createMap('IndicationFinding_NeckMRT_ApiModel', 'IndicationFinding_NeckMRT_UiModel').convertToType(IndicationFindingUiModel);
  }

  mapToAPI(source: IndicationFindingUiModel, out: IndicationFindingApiModel): IndicationFindingApiModel {
    out = automapper.map('IndicationFinding_NeckMRT_UiModel', 'IndicationFinding_NeckMRT_ApiModel', source);

    out.monthOfPostoperativeImaging = this.monthYearMapper.mapToApi(source.dateOfPostoperativeImaging);
    out.yearOfPostoperativeImaging = source.dateOfPostoperativeImaging.year;

    return out;
  }

  mapToUI(source: IndicationFindingApiModel, out: IndicationFindingUiModel): IndicationFindingUiModel {
    out = automapper.map('IndicationFinding_NeckMRT_ApiModel', 'IndicationFinding_NeckMRT_UiModel', source);

    out.dateOfPostoperativeImaging.month = source.monthOfPostoperativeImaging;
    out.dateOfPostoperativeImaging.year = source.yearOfPostoperativeImaging;

    return out;
  }
}
