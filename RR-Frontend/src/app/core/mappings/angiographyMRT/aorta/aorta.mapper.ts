import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AortaUiModel } from '@models/angiographyMRT/ui/aorta/aorta-ui.model';
import { AortaApiModel } from '@models/angiographyMRT/api/aorta/aorta-api.model';
import { AortaFindingMapper } from '@mappings/angiographyMRT/aorta/aorta-finding.mapper';
import { AortaFindingApiModel } from '@models/angiographyMRT/api/aorta/aorta-finding-api.model';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AortaMapper implements IMapper<AortaApiModel, AortaUiModel> {
  constructor(private aortaFindingMapper: AortaFindingMapper) {
    automapper.createMap('Aorta_AngioMRT_UiModel', 'Aorta_AngioMRT_ApiModel').convertToType(AortaApiModel);
    automapper.createMap('Aorta_AngioMRT_ApiModel', 'Aorta_AngioMRT_UiModel').convertToType(AortaUiModel);
  }

  mapToAPI(source: AortaUiModel, out: AortaApiModel): AortaApiModel {
    out = automapper.map('Aorta_AngioMRT_UiModel', 'Aorta_AngioMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.aortaFindingMapper.mapToAPI(finding, new AortaFindingApiModel())));
    return out;
  }

  mapToUI(source: AortaApiModel, out: AortaUiModel): AortaUiModel {
    out = automapper.map('Aorta_AngioMRT_ApiModel', 'Aorta_AngioMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.aortaFindingMapper.mapToUI(finding, new AortaFindingUiModel())));
    return out;
  }
}
