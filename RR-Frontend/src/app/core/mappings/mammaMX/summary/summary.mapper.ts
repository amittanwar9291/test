import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SummaryApiModel } from '@models/mammaMX/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/mammaMX/ui/summary/summary-ui.model';
import { CorrelationApiModel } from '@models/shared/page-correlation/api/correlation-api.model';
import { CorrelationUiModel } from '@models/shared/page-correlation/ui/correlation-ui.model';

import { CorrelationMapper } from '@mappings/shared/page-correlation/correlation.mapper';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor(private correlationMapper: CorrelationMapper) {
    automapper
      .createMap('Summary_MammaMX_UiModel', 'Summary_MammaMX_ApiModel')
      .convertToType(SummaryApiModel)
      .forSourceMember('findingRelations', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Summary_MammaMX_ApiModel', 'Summary_MammaMX_UiModel')
      .convertToType(SummaryUiModel)
      .forSourceMember('findingRelations', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_MammaMX_UiModel', 'Summary_MammaMX_ApiModel', source);

    out.findingRelations = source.findingRelations.map((correlation: CorrelationUiModel) =>
      this.correlationMapper.mapToAPI(correlation, new CorrelationApiModel())
    );

    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_MammaMX_ApiModel', 'Summary_MammaMX_UiModel', source);

    out.findingRelations = source.findingRelations.map((correlation: CorrelationApiModel) =>
      this.correlationMapper.mapToUI(correlation, new CorrelationUiModel())
    );

    return out;
  }
}
