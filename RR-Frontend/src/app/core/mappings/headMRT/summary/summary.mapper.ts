import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SummaryApiModel } from '@models/headMRT/api/summary/summary-api.model';
import { SummaryFindingApiModel } from '@models/headMRT/api/summary/summary-finding-api.model';

import { SummaryUiModel } from '@models/headMRT/ui/summary/summary-ui.model';
import { SummaryDiagnosisFindingMapper } from './summary-diagnosis-finding.mapper';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor(private findingType: SummaryDiagnosisFindingMapper) {
    automapper
      .createMap('Summary_HeadMRT_UiModel', 'Summary_HeadMRT_ApiModel')
      .convertToType(SummaryApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());

    automapper
      .createMap('Summary_HeadMRT_ApiModel', 'Summary_HeadMRT_UiModel')
      .convertToType(SummaryUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_HeadMRT_UiModel', 'Summary_HeadMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);

    source.findings.forEach(finding => {
      out.findings.push(this.findingType.mapToAPI(finding, new SummaryFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_HeadMRT_ApiModel', 'Summary_HeadMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.findingType.mapToUI(finding, new SummaryFindingUiModel()));
    });

    return out;
  }
}
