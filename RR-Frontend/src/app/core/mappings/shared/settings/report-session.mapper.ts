import { ReportSessionUiModel } from '@models/shared/settings/report-session-ui.model';
import { ReportSessionApiModel } from '@models/shared/settings/report-session-api.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportSessionMapper {
  constructor() {
    automapper.createMap('ReportSessionApiModel', 'ReportSessionUiModel').convertToType(ReportSessionUiModel);
  }

  mapToUI(source: ReportSessionApiModel): ReportSessionUiModel {
    const out: ReportSessionUiModel = automapper.map('ReportSessionApiModel', 'ReportSessionUiModel', source);
    out.reportCreationDate = new Date(source.reportCreationDate);
    out.reportSessionCreationDate = new Date(source.reportSessionCreationDate);

    return out;
  }
}
