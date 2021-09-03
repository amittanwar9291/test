import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { ReportPageApiModel, ReportPageUiModel } from '@models/shared/navigation';

@Injectable({
  providedIn: 'root'
})
export class ReportPageMapper implements IMapper<ReportPageApiModel, ReportPageUiModel> {
  constructor() {
    automapper.createMap('ReportPageUiModel', 'ReportPageApiModel').convertToType(ReportPageApiModel);
    automapper.createMap('ReportPageApiModel', 'ReportPageUiModel').convertToType(ReportPageUiModel);
  }

  mapToAPI(source: ReportPageUiModel, out: ReportPageApiModel): ReportPageApiModel {
    return automapper.map('ReportPageUiModel', 'ReportPageApiModel', source);
  }
  mapToUI(source: ReportPageApiModel, out: ReportPageUiModel): ReportPageUiModel {
    return automapper.map('ReportPageApiModel', 'ReportPageUiModel', source);
  }
}
