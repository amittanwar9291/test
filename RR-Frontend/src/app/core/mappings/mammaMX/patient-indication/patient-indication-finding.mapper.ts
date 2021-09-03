import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientIndicationFindingApiModel } from '@models/mammaMX/api/patient-indication/patient-indication-finding-api.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-finding-ui.model';
import { PatientIndicationFindingTypeEnum } from '@enums/mammaMX/patient-indication/patient-indication-finding-type.enum';

@Injectable({
  providedIn: 'root'
})
export class MammaMXPatientIndicationFindingMapper implements IMapper<PatientIndicationFindingApiModel, PatientIndicationFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('PatientIndicationFinding_MammaMX_ApiModel', 'PatientIndicationFinding_MammaMX_UiModel')
      .convertToType(PatientIndicationFindingUiModel);
    automapper
      .createMap('PatientIndicationFinding_MammaMX_UiModel', 'PatientIndicationFinding_MammaMX_ApiModel')
      .convertToType(PatientIndicationFindingApiModel);
  }

  mapToAPI(source: PatientIndicationFindingUiModel, out: PatientIndicationFindingApiModel): PatientIndicationFindingApiModel {
    out = automapper.map('PatientIndicationFinding_MammaMX_UiModel', 'PatientIndicationFinding_MammaMX_ApiModel', source);

    out.nippleDischargeLocalization = this.enumMapper.mapToString(
      source.findingType === PatientIndicationFindingTypeEnum.LumpIndurationDetected
        ? source.nippleDischargeShoulderLocalization
        : source.nippleDischargeLocalization
    );

    return out;
  }

  mapToUI(source: PatientIndicationFindingApiModel, out: PatientIndicationFindingUiModel): PatientIndicationFindingUiModel {
    out = automapper.map('PatientIndicationFinding_MammaMX_ApiModel', 'PatientIndicationFinding_MammaMX_UiModel', source);

    this.enumMapper.mapToObject(
      source.nippleDischargeLocalization,
      out.findingType === PatientIndicationFindingTypeEnum.LumpIndurationDetected
        ? out.nippleDischargeShoulderLocalization
        : out.nippleDischargeLocalization
    );

    return out;
  }
}
