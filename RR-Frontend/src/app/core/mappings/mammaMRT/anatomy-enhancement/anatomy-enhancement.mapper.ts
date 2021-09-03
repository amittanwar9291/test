import { Injectable } from '@angular/core';

import { AnatomyEnhancementApi } from '@models/mammaMRT/api/anatomy-enhancement/anatomy-enhancement-api.model';
import { AnatomyEnhancementUi } from '@models/mammaMRT/ui/anatomy-enhancement/anatomy-enhancement-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { FindingSiliconeMapper } from '@mappings/mammaMRT/anatomy-enhancement/finding-silicone.mapper';
import { FindingMamillaMapper } from '@mappings/mammaMRT/anatomy-enhancement/finding-mamilla.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnatomyEnhancementMapper implements IMapper<AnatomyEnhancementApi, AnatomyEnhancementUi> {
  constructor(
    private enumMapper: EnumMapper,
    private findingSiliconeMapper: FindingSiliconeMapper,
    private findingMamillaMapper: FindingMamillaMapper
  ) {
    automapper
      .createMap('AnatomyEnhancement_MammaMRT_UiModel', 'AnatomyEnhancement_MammaMRT_ApiModel')
      .convertToType(AnatomyEnhancementApi);
    automapper.createMap('AnatomyEnhancement_MammaMRT_ApiModel', 'AnatomyEnhancement_MammaMRT_UiModel').convertToType(AnatomyEnhancementUi);
  }
  mapToAPI(source: AnatomyEnhancementUi, out: AnatomyEnhancementApi): AnatomyEnhancementApi {
    out = automapper.map('AnatomyEnhancement_MammaMRT_UiModel', 'AnatomyEnhancement_MammaMRT_ApiModel', source);

    out.artefactFinding1Location = this.enumMapper.mapToString(source.artefactFinding1Location);
    out.artefactFinding2Location = this.enumMapper.mapToString(source.artefactFinding2Location);
    out.siliconeImplantFinding1 = this.findingSiliconeMapper.mapToAPI(source.siliconeImplantFinding1, out.siliconeImplantFinding1);
    out.siliconeImplantFinding2 = this.findingSiliconeMapper.mapToAPI(source.siliconeImplantFinding2, out.siliconeImplantFinding2);
    out.mamillaFinding1 = this.findingMamillaMapper.mapToAPI(source.mamillaFinding1, out.mamillaFinding1);
    out.mamillaFinding2 = this.findingMamillaMapper.mapToAPI(source.mamillaFinding2, out.mamillaFinding2);
    return out;
  }
  mapToUI(source: AnatomyEnhancementApi, out: AnatomyEnhancementUi): AnatomyEnhancementUi {
    out = automapper.map('AnatomyEnhancement_MammaMRT_ApiModel', 'AnatomyEnhancement_MammaMRT_UiModel', source);

    this.enumMapper.mapToObject(source.artefactFinding1Location, out.artefactFinding1Location);
    this.enumMapper.mapToObject(source.artefactFinding2Location, out.artefactFinding2Location);
    out.siliconeImplantFinding1 = this.findingSiliconeMapper.mapToUI(source.siliconeImplantFinding1, out.siliconeImplantFinding1);
    out.siliconeImplantFinding2 = this.findingSiliconeMapper.mapToUI(source.siliconeImplantFinding2, out.siliconeImplantFinding2);
    out.mamillaFinding1 = this.findingMamillaMapper.mapToUI(source.mamillaFinding1, out.mamillaFinding1);
    out.mamillaFinding2 = this.findingMamillaMapper.mapToUI(source.mamillaFinding2, out.mamillaFinding2);
    return out;
  }
}
