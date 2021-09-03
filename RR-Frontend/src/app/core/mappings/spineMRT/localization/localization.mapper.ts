import { Injectable } from '@angular/core';

import { LocalizationApiModel } from '@models/spineMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_SpineMRT_UiModel', 'Localization_SpineMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Localization_SpineMRT_ApiModel', 'Localization_SpineMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_SpineMRT_UiModel', 'Localization_SpineMRT_ApiModel', source);
    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_SpineMRT_ApiModel', 'Localization_SpineMRT_UiModel', source);
    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());

    return out;
  }
}
