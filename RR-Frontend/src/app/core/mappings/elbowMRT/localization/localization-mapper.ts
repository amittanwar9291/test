import { Injectable } from '@angular/core';

import { LocalizationApiModel } from '@models/elbowMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/elbowMRT/ui/localization/localization-ui.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_ElbowMRT_ApiModel', 'Localization_ElbowMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Localization_ElbowMRT_UiModel', 'Localization_ElbowMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_ElbowMRT_UiModel', 'Localization_ElbowMRT_ApiModel', source);

    out.localization = this.enumMapper.mapToString(source.localization);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_ElbowMRT_ApiModel', 'Localization_ElbowMRT_UiModel', source);

    this.enumMapper.mapToObject(source.localization, out.localization);

    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());

    return out;
  }
}
