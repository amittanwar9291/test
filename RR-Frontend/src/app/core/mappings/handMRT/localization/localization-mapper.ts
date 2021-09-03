import { Injectable } from '@angular/core';

import { LocalizationApiModel } from '@models/handMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/handMRT/ui/localization/localization-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { IMapper } from '@interfaces/mapper.interface';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_HandMRT_ApiModel', 'Localization_HandMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('handLocation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Localization_HandMRT_UiModel', 'Localization_HandMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('handLocation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_HandMRT_UiModel', 'Localization_HandMRT_ApiModel', source);
    out.localization = this.enumMapper.mapToString(source.localization);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_HandMRT_ApiModel', 'Localization_HandMRT_UiModel', source);
    this.enumMapper.mapToObject(source.localization, out.localization);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());

    return out;
  }
}
