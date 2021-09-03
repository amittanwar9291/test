import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AbdomenApiModel } from '@models/angiographyCT/api/abdomen/abdomen-api.model';
import { AbdomenUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-ui.model';
import { AbdomenFindingMapper } from '@mappings/angiographyCT/abdomen/abdomen-finding.mapper';
import { AbdomenFindingApiModel } from '@models/angiographyCT/api/abdomen/abdomen-finding-api.model';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AbdomenMapper implements IMapper<AbdomenApiModel, AbdomenUiModel> {
  constructor(private findingMapper: AbdomenFindingMapper) {
    automapper
      .createMap('Abdomen_AngioCT_UiModel', 'Abdomen_AngioCT_ApiModel')
      .convertToType(AbdomenApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('Abdomen_AngioCT_ApiModel', 'Abdomen_AngioCT_UiModel')
      .convertToType(AbdomenUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: AbdomenUiModel, out: AbdomenApiModel): AbdomenApiModel {
    out = automapper.map('Abdomen_AngioCT_UiModel', 'Abdomen_AngioCT_ApiModel', source);
    out.findings.length = 0;
    source.findings?.forEach(finding => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new AbdomenFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: AbdomenApiModel, out: AbdomenUiModel): AbdomenUiModel {
    out = automapper.map('Abdomen_AngioCT_ApiModel', 'Abdomen_AngioCT_UiModel', source);
    out.findings.length = 0;
    source.findings?.forEach(finding => {
      out.findings.push(this.findingMapper.mapToUI(finding, new AbdomenFindingUiModel()));
    });
    return out;
  }
}
