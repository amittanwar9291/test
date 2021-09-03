import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { TextReportApiModel } from '@models/shared/report/text-report-api';
import { TextReportUiModel } from '@models/shared/report/text-report-ui';

@Injectable({
  providedIn: 'root'
})
export class TextReportMapper implements IMapper<TextReportApiModel, TextReportUiModel> {
  constructor() {
    automapper.createMap('TextReportUiModel', 'TextReportApiModel').convertToType(TextReportApiModel);
    automapper.createMap('TextReportApiModel', 'TextReportUiModel').convertToType(TextReportUiModel);
  }
  mapToAPI(source: TextReportUiModel, out: TextReportApiModel): TextReportApiModel {
    out = automapper.map('TextReportUiModel', 'TextReportApiModel', source);
    return out;
  }
  mapToUI(source: TextReportApiModel, out: TextReportUiModel): TextReportUiModel {
    out = automapper.map('TextReportApiModel', 'TextReportUiModel', source);
    return out;
  }
}
