import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { ExaminationIndicationApiModel } from '@models/headCT/api/examination/examination-indication-api.model';
import { ExaminationIndicationUiModel } from '@models/headCT/ui/examination/examination-indication-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationIndicationMapper implements IMapper<ExaminationIndicationApiModel, ExaminationIndicationUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('ExaminationIndication_HeadCT_ApiModel', 'ExaminationIndication_HeadCT_UiModel')
      .convertToType(ExaminationIndicationUiModel);
    automapper
      .createMap('ExaminationIndication_HeadCT_UiModel', 'ExaminationIndication_HeadCT_ApiModel')
      .convertToType(ExaminationIndicationApiModel);
  }

  mapToAPI(source: ExaminationIndicationUiModel, out: ExaminationIndicationApiModel): ExaminationIndicationApiModel {
    out = automapper.map('ExaminationIndication_HeadCT_UiModel', 'ExaminationIndication_HeadCT_ApiModel', source);
    out.year = source.date.year;
    out.month = this.monthYearMapper.mapToApi(source.date);

    return out;
  }

  mapToUI(source: ExaminationIndicationApiModel, out: ExaminationIndicationUiModel): ExaminationIndicationUiModel {
    out = automapper.map('ExaminationIndication_HeadCT_ApiModel', 'ExaminationIndication_HeadCT_UiModel', source);
    out.date.year = source.year;
    out.date.month = source.month;
    return out;
  }
}
