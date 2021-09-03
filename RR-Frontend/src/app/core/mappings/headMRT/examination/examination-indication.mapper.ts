import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { ExaminationIndicationUiModel } from '@models/headMRT/ui/examination/examination-indication-ui.model';
import { ExaminationIndicationApiModel } from '@models/headMRT/api/examination/examination-indication-api.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationIndicationMapper implements IMapper<ExaminationIndicationApiModel, ExaminationIndicationUiModel> {
  checkYearAndGetMonth = (date: MonthYearModel): number => (date.year === 0 || date.year === -1 ? 0 : date.month);

  constructor() {
    automapper
      .createMap('ExaminationIndication_HeadMRT_ApiModel', 'ExaminationIndication_HeadMRT_UiModel')
      .convertToType(ExaminationIndicationUiModel);
    automapper
      .createMap('ExaminationIndication_HeadMRT_UiModel', 'ExaminationIndication_HeadMRT_ApiModel')
      .convertToType(ExaminationIndicationApiModel);
  }

  mapToAPI(source: ExaminationIndicationUiModel, out: ExaminationIndicationApiModel): ExaminationIndicationApiModel {
    out = automapper.map('ExaminationIndication_HeadMRT_UiModel', 'ExaminationIndication_HeadMRT_ApiModel', source);
    out.year = source.date.year;
    out.month = this.checkYearAndGetMonth(source.date);
    return out;
  }

  mapToUI(source: ExaminationIndicationApiModel, out: ExaminationIndicationUiModel): ExaminationIndicationUiModel {
    out = automapper.map('ExaminationIndication_HeadMRT_ApiModel', 'ExaminationIndication_HeadMRT_UiModel', source);
    out.date.year = source.year;
    out.date.month = source.month;
    return out;
  }
}
