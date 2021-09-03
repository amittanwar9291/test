import { IMapper } from '@interfaces/mapper.interface';
import { SummaryApiModel } from '@models/feetMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/feetMRT/ui/summary/summary-ui.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper
      .createMap('Summary_FeetMRT_UiModel', 'Summary_FeetMRT_ApiModel')
      .convertToType(SummaryApiModel)
      .forSourceMember('dateOfPreliminaryExamination', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        const dirtyDate: Date = opts.sourceObject[opts.sourcePropertyName];
        // purify date of timezone
        return dirtyDate ? dirtyDate.toDateString() : null;
      });

    automapper
      .createMap('Summary_FeetMRT_ApiModel', 'Summary_FeetMRT_UiModel')
      .convertToType(SummaryUiModel)
      .forSourceMember('dateOfPreliminaryExamination', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        const date: string = opts.sourceObject[opts.sourcePropertyName];
        return date ? new Date(date) : null;
      });
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_FeetMRT_UiModel', 'Summary_FeetMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_FeetMRT_ApiModel', 'Summary_FeetMRT_UiModel', source);

    return out;
  }
}
