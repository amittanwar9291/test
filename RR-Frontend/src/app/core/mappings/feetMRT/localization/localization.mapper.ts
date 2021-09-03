import { Injectable } from '@angular/core';

import { LocalizationApiModel } from '@models/feetMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/feetMRT/ui/localization/localization-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_FeetMRT_ApiModel', 'Localization_FeetMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Localization_FeetMRT_UiModel', 'Localization_FeetMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_FeetMRT_UiModel', 'Localization_FeetMRT_ApiModel', source);
    out.localization = this.enumMapper.mapToString(source.localization);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_FeetMRT_ApiModel', 'Localization_FeetMRT_UiModel', source);
    this.enumMapper.mapToObject(source.localization, out.localization);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
