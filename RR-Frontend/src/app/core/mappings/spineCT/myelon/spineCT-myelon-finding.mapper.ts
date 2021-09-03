import { Injectable } from '@angular/core';

import { MyelonFindingApiModel } from '@models/spineCT/api/myelon/myelon-finding-api.model';
import { MyelonFindingUiModel } from '@models/spineCT/ui/myelon/myelon-finding-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { IMapper } from '@interfaces/mapper.interface';
import { SpineDirectionalLocationMapper } from '@mappings/spineMRT/shared/spine-directional-location/spine-directional-location.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTMyelonFindingMapper implements IMapper<MyelonFindingApiModel, MyelonFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private spineDirectionalLocationMapper: SpineDirectionalLocationMapper) {
    automapper.createMap('MyelonFindingUiModel', 'MyelonFindingApiModel').convertToType(MyelonFindingApiModel);
    automapper.createMap('MyelonFindingApiModel', 'MyelonFindingUiModel').convertToType(MyelonFindingUiModel);
  }

  mapToAPI(source: MyelonFindingUiModel, out: MyelonFindingApiModel): MyelonFindingApiModel {
    out = automapper.map('MyelonFindingUiModel', 'MyelonFindingApiModel', source);

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.localizationOfNerveRootDisplacement = this.spineDirectionalLocationMapper.mapToString(source.localizationOfNerveRootDisplacement);
    out.localizationOfNeuralForaminalWidening = this.spineDirectionalLocationMapper.mapToString(
      source.localizationOfNeuralForaminalWidening
    );
    out.differentialDiagnosisAbove1LesionLocations = this.enumMapper.mapToString(source.differentialDiagnosisAbove1LesionLocations);
    out.localizationTopOrBottomVertebra = this.enumMapper.mapToString(source.localizationTopOrBottomVertebra);
    out.spinalCanalLocation = this.enumMapper.mapToString(source.spinalCanalLocation);

    return out;
  }
  mapToUI(source: MyelonFindingApiModel, out: MyelonFindingUiModel): MyelonFindingUiModel {
    out = automapper.map('MyelonFindingApiModel', 'MyelonFindingUiModel', source);

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.spineDirectionalLocationMapper.mapToObject(source.localizationOfNerveRootDisplacement, out.localizationOfNerveRootDisplacement);
    this.spineDirectionalLocationMapper.mapToObject(
      source.localizationOfNeuralForaminalWidening,
      out.localizationOfNeuralForaminalWidening
    );
    this.enumMapper.mapToObject(source.differentialDiagnosisAbove1LesionLocations, out.differentialDiagnosisAbove1LesionLocations);
    this.enumMapper.mapToObject(source.localizationTopOrBottomVertebra, out.localizationTopOrBottomVertebra);
    this.enumMapper.mapToObject(source.spinalCanalLocation, out.spinalCanalLocation);

    return out;
  }
}
