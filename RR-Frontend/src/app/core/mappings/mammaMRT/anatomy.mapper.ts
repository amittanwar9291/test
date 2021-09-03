import { Injectable } from '@angular/core';

import { AnatomyApiModel } from '@models/mammaMRT/api/anatomy/anatomy-api.model';
import { AnatomyUiModel } from '@models/mammaMRT/ui/anatomy/anatomy-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class AnatomyMapper implements IMapper<AnatomyApiModel, AnatomyUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('Anatomy_MammaMRT_ApiModel', 'Anatomy_MammaMRT_UiModel').convertToType(AnatomyUiModel);
    automapper.createMap('Anatomy_MammaMRT_UiModel', 'Anatomy_MammaMRT_ApiModel').convertToType(AnatomyApiModel);
  }

  mapToAPI(source: AnatomyUiModel, out: AnatomyApiModel): AnatomyApiModel {
    out = automapper.map('Anatomy_MammaMRT_UiModel', 'Anatomy_MammaMRT_ApiModel', source);

    out.volumeLocation = this.enumMapper.mapToString(source.volumeLocation);
    out.cutisThicknessLocation = this.enumMapper.mapToString(source.cutisThicknessLocation);
    out.cutisRetractionLocation = this.enumMapper.mapToString(source.cutisRetractionLocation);
    out.subcutaneousFatSpaceLocation = this.enumMapper.mapToString(source.subcutaneousFatSpaceLocation);
    out.pectoralisMuscleLocation = this.enumMapper.mapToString(source.pectoralisMuscleLocation);

    return out;
  }

  mapToUI(source: AnatomyApiModel, out: AnatomyUiModel): AnatomyUiModel {
    out = automapper.map('Anatomy_MammaMRT_ApiModel', 'Anatomy_MammaMRT_UiModel', source);

    this.enumMapper.mapToObject(source.volumeLocation, out.volumeLocation);
    this.enumMapper.mapToObject(source.cutisThicknessLocation, out.cutisThicknessLocation);
    this.enumMapper.mapToObject(source.cutisRetractionLocation, out.cutisRetractionLocation);
    this.enumMapper.mapToObject(source.subcutaneousFatSpaceLocation, out.subcutaneousFatSpaceLocation);
    this.enumMapper.mapToObject(source.pectoralisMuscleLocation, out.pectoralisMuscleLocation);

    return out;
  }
}
