import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AbdomenApiModel } from '@models/angiographyMRT/api/abdomen/abdomen-api.model';
import { AbdomenUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-ui.model';
import { AbdomenFindingsMapper } from '@mappings/angiographyMRT/abdomen/abdomen-finding.mapper';
import { AbdomenFindingApiModel } from '@models/angiographyMRT/api/abdomen/abdomen-finding-api.model';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AbdomenMapper implements IMapper<AbdomenApiModel, AbdomenUiModel> {
  constructor(private abdomenFindingsMapper: AbdomenFindingsMapper) {
    automapper.createMap('Abdomen_AngioMRT_UiModel', 'Abdomen_AngioMRT_ApiModel').convertToType(AbdomenApiModel);
    automapper.createMap('Abdomen_AngioMRT_ApiModel', 'Abdomen_AngioMRT_UiModel').convertToType(AbdomenUiModel);
  }

  mapToAPI(source: AbdomenUiModel, out: AbdomenApiModel): AbdomenApiModel {
    out = automapper.map('Abdomen_AngioMRT_UiModel', 'Abdomen_AngioMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.abdomenFindingsMapper.mapToAPI(finding, new AbdomenFindingApiModel())));
    return out;
  }

  mapToUI(source: AbdomenApiModel, out: AbdomenUiModel): AbdomenUiModel {
    out = automapper.map('Abdomen_AngioMRT_ApiModel', 'Abdomen_AngioMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.abdomenFindingsMapper.mapToUI(finding, new AbdomenFindingUiModel())));
    return out;
  }
}
