import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { LocalizationApiModel } from '@models/pelvisMRT/api/localization/localization-api.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_PelvisMRT_UiModel', 'Localization_PelvisMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Localization_PelvisMRT_ApiModel', 'Localization_PelvisMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_PelvisMRT_UiModel', 'Localization_PelvisMRT_ApiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_PelvisMRT_ApiModel', 'Localization_PelvisMRT_UiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());

    return out;
  }
}
