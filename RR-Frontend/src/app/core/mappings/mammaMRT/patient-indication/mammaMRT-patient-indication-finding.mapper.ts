import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { PatientIndicationFindingApiModel } from '@models/mammaMRT/api/patient-indication/patient-indication-finding-api.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-finding-ui.model';

import { PatientIndicationFindingTypeEnum } from '@enums/mammaMRT/patient-indication';

@Injectable({
  providedIn: 'root'
})
export class MammaMRTPatientIndicationFindingMapper implements IMapper<PatientIndicationFindingApiModel, PatientIndicationFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('PatientIndicationFinding_MammaMRT_ApiModel', 'PatientIndicationFinding_MammaMRT_UiModel')
      .convertToType(PatientIndicationFindingUiModel);
    automapper
      .createMap('PatientIndicationFinding_MammaMRT_UiModel', 'PatientIndicationFinding_MammaMRT_ApiModel')
      .convertToType(PatientIndicationFindingApiModel);
  }

  mapToAPI(source: PatientIndicationFindingUiModel, out: PatientIndicationFindingApiModel): PatientIndicationFindingApiModel {
    out = automapper.map('PatientIndicationFinding_MammaMRT_UiModel', 'PatientIndicationFinding_MammaMRT_ApiModel', source);

    out.nippleDischargeLocalization = this.enumMapper.mapToString(
      source.findingType === PatientIndicationFindingTypeEnum.LumpsHardeningInBreastDetected
        ? source.nippleDischargeShoulderLocalization
        : source.nippleDischargeLocalization
    );

    return out;
  }

  mapToUI(source: PatientIndicationFindingApiModel, out: PatientIndicationFindingUiModel): PatientIndicationFindingUiModel {
    out = automapper.map('PatientIndicationFinding_MammaMRT_ApiModel', 'PatientIndicationFinding_MammaMRT_UiModel', source);

    this.enumMapper.mapToObject(
      source.nippleDischargeLocalization,
      out.findingType === PatientIndicationFindingTypeEnum.LumpsHardeningInBreastDetected
        ? out.nippleDischargeShoulderLocalization
        : out.nippleDischargeLocalization
    );

    return out;
  }
}
