import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { ReportApiModel, ReportUiModel } from '@models/shared/report';
import { ReportPageMapper } from '@mappings/shared/navigation/report-page.mapper';

@Injectable({
  providedIn: 'root'
})
export class ReportMapper implements IMapper<ReportApiModel, ReportUiModel> {
  constructor(private pageMapper: ReportPageMapper) {
    automapper
      .createMap('ReportApiModel', 'ReportUiModel')
      .convertToType(ReportUiModel)
      .forMember('pages', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('pages'));
    automapper
      .createMap('ReportUiModel', 'ReportApiModel')
      .convertToType(ReportApiModel)
      .forMember('pages', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('pages'));
  }

  mapToAPI(source: ReportUiModel, out: ReportApiModel): ReportApiModel {
    out = automapper.map('ReportUiModel', 'ReportApiModel', source);
    out.examinationDate = source.examinationDate.toDateString();
    out.findingsDate = source.findingsDate.toDateString();

    return out;
  }

  mapToUI(source: ReportApiModel, out: ReportUiModel): ReportUiModel {
    out = automapper.map('ReportApiModel', 'ReportUiModel', source);
    out.examinationDate = new Date(source.examinationDate);
    out.findingsDate = new Date(source.findingsDate);

    return out;
  }
}
