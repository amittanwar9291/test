import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SummaryFindingApiModel } from '@models/headMRT/api/summary/summary-finding-api.model';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class SummaryDiagnosisFindingMapper implements IMapper<SummaryFindingApiModel, SummaryFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper.createMap('SummaryFinding_HeadMRT_ApiModel', 'SummaryFinding_HeadMRT_UiModel').convertToType(SummaryFindingUiModel);
    automapper.createMap('SummaryFinding_HeadMRT_UiModel', 'SummaryFinding_HeadMRT_ApiModel').convertToType(SummaryFindingApiModel);
  }

  mapToAPI(source: SummaryFindingUiModel, out: SummaryFindingApiModel): SummaryFindingApiModel {
    out = automapper.map('SummaryFinding_HeadMRT_UiModel', 'SummaryFinding_HeadMRT_ApiModel', source);

    out.progressControlMonth = this.monthYearMapper.mapToApi(source.progressControlDate);
    out.progressControlYear = source.progressControlDate.year;

    return out;
  }

  mapToUI(source: SummaryFindingApiModel, out: SummaryFindingUiModel): SummaryFindingUiModel {
    out = automapper.map('SummaryFinding_HeadMRT_ApiModel', 'SummaryFinding_HeadMRT_UiModel', source);

    out.progressControlDate.month = source.progressControlMonth;
    out.progressControlDate.year = source.progressControlYear;

    return out;
  }
}
