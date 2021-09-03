import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SacroiliacJointFindingApiModel } from '@models/spineMRT/api/sacroiliac-joint/sacroiliac-joint-finding-api.model';
import { SacroiliacJointFindingUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { DifferentialDiagnosisMapper } from '@mappings/shared/differential-diagnosis/differential-diagnosis.mapper';

@Injectable({
  providedIn: 'root'
})
export class SacroiliacJointFindingsMapper implements IMapper<SacroiliacJointFindingApiModel, SacroiliacJointFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private diagnosisMapper: DifferentialDiagnosisMapper) {
    automapper
      .createMap('SacroiliacJointFinding_SpineMRT_ApiModel', 'SacroiliacJointFinding_SpineMRT_UiModel')
      .convertToType(SacroiliacJointFindingUiModel);
    automapper
      .createMap('SacroiliacJointFinding_SpineMRT_UiModel', 'SacroiliacJointFinding_SpineMRT_ApiModel')
      .convertToType(SacroiliacJointFindingApiModel);

    automapper
      .createMap('SacroiliacJointScore_SpineMRT_ApiModel', 'SacroiliacJointScore_SpineMRT_UiModel')
      .convertToType(SacroiliacJointFindingUiModel);
    automapper
      .createMap('SacroiliacJointScore_SpineMRT_UiModel', 'SacroiliacJointScore_SpineMRT_ApiModel')
      .convertToType(SacroiliacJointFindingApiModel);
  }

  mapToAPI(source: SacroiliacJointFindingUiModel, out: SacroiliacJointFindingApiModel): SacroiliacJointFindingApiModel {
    out = automapper.map('SacroiliacJointFinding_SpineMRT_UiModel', 'SacroiliacJointFinding_SpineMRT_ApiModel', source);
    out.pelvisLocation = this.enumMapper.mapToString(source.pelvisLocation);

    out.score1.scoreLocation = this.enumMapper.mapToString(source.score1.scoreLocation);
    out.score2.scoreLocation = this.enumMapper.mapToString(source.score2.scoreLocation);
    out.score3.scoreLocation = this.enumMapper.mapToString(source.score3.scoreLocation);
    out.score4.scoreLocation = this.enumMapper.mapToString(source.score4.scoreLocation);
    out.score5.scoreLocation = this.enumMapper.mapToString(source.score5.scoreLocation);
    out.score6.scoreLocation = this.enumMapper.mapToString(source.score6.scoreLocation);

    return out;
  }

  mapToUI(source: SacroiliacJointFindingApiModel, out: SacroiliacJointFindingUiModel): SacroiliacJointFindingUiModel {
    out = automapper.map('SacroiliacJointFinding_SpineMRT_ApiModel', 'SacroiliacJointFinding_SpineMRT_UiModel', source);
    this.enumMapper.mapToObject(source.pelvisLocation, out.pelvisLocation);
    this.enumMapper.mapToObject(source.score1.scoreLocation, out.score1.scoreLocation);
    this.enumMapper.mapToObject(source.score2.scoreLocation, out.score2.scoreLocation);
    this.enumMapper.mapToObject(source.score3.scoreLocation, out.score3.scoreLocation);
    this.enumMapper.mapToObject(source.score4.scoreLocation, out.score4.scoreLocation);
    this.enumMapper.mapToObject(source.score5.scoreLocation, out.score5.scoreLocation);
    this.enumMapper.mapToObject(source.score6.scoreLocation, out.score6.scoreLocation);

    this.enumMapper.mapToObject(source.score1.scoreLocation, out.score1.scoreLocation);
    this.enumMapper.mapToObject(source.score2.scoreLocation, out.score2.scoreLocation);
    this.enumMapper.mapToObject(source.score3.scoreLocation, out.score3.scoreLocation);
    this.enumMapper.mapToObject(source.score4.scoreLocation, out.score4.scoreLocation);
    this.enumMapper.mapToObject(source.score5.scoreLocation, out.score5.scoreLocation);
    this.enumMapper.mapToObject(source.score6.scoreLocation, out.score6.scoreLocation);

    return out;
  }
}
