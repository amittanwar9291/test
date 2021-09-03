import { Injectable } from '@angular/core';

import { ReportListItemApiModel } from '@models/shared/report/report-list-item-api.model';
import { ReportListItemUiModel } from '@models/shared/report/report-list-item-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportListItemMapper implements IMapper<ReportListItemApiModel, ReportListItemUiModel> {
  constructor() {
    automapper.createMap('ReportListItemApiModel', 'ReportListItemUiModel').convertToType(ReportListItemUiModel);
    automapper.createMap('ReportListItemUiModel', 'ReportListItemApiModel').convertToType(ReportListItemApiModel);
  }

  mapToAPI(source: ReportListItemUiModel, out: ReportListItemApiModel): ReportListItemApiModel {
    out = automapper.map('ReportListItemUiModel', 'ReportListItemApiModel', source);
    out.findingsDate = source.findingsDate.toDateString();
    out.examinationDate = source.examinationDate.toDateString();
    out.patientBirthDate = source.patientBirthDate.toDateString();

    return out;
  }

  mapToUI(source: ReportListItemApiModel, out: ReportListItemUiModel): ReportListItemUiModel {
    out = automapper.map('ReportListItemApiModel', 'ReportListItemUiModel', source);
    out.findingsDate = new Date(source.findingsDate);
    out.examinationDate = new Date(source.examinationDate);
    out.patientBirthDate = new Date(source.patientBirthDate);

    return out;
  }
}
