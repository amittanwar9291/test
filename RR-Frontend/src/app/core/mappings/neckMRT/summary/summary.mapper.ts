import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { TnmClassificationsFindingMapper } from '@mappings/neckMRT/summary/tnm-classifications-finding.mapper';

import { SummaryApiModel } from '@models/neckMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/neckMRT/ui/summary/summary-ui.model';
import { TNMClassificationUiModel } from '@models/neckMRT/ui/summary/tnmclassification-ui.model';
import { TNMClassificationApiModel } from '@models/neckMRT/api/summary/tnmclassification-api.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor(private tnmClassificationFindingMapper: TnmClassificationsFindingMapper) {
    automapper
      .createMap('Summary_NeckMRT_UiModel', 'Summary_NeckMRT_ApiModel')
      .convertToType(SummaryApiModel)
      .forSourceMember('tnmClassifications', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());

    automapper
      .createMap('Summary_NeckMRT_ApiModel', 'Summary_NeckMRT_UiModel')
      .convertToType(SummaryUiModel)
      .forSourceMember('tnmClassifications', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_NeckMRT_UiModel', 'Summary_NeckMRT_ApiModel', source);

    out.tnmClassifications = source.tnmClassifications.map((finding: TNMClassificationUiModel) => {
      return this.tnmClassificationFindingMapper.mapToAPI(finding, new TNMClassificationApiModel());
    });

    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_NeckMRT_ApiModel', 'Summary_NeckMRT_UiModel', source);

    out.tnmClassifications = source.tnmClassifications.map((finding: TNMClassificationApiModel) => {
      return this.tnmClassificationFindingMapper.mapToUI(finding, new TNMClassificationUiModel());
    });

    return out;
  }
}
