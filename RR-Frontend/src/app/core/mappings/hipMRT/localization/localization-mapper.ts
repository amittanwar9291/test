import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { LocalizationApiModel } from '@models/hipMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/hipMRT/ui/localization/localization-ui.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_HipMRT_ApiModel', 'Localization_HipMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Localization_HipMRT_UiModel', 'Localization_HipMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_HipMRT_UiModel', 'Localization_HipMRT_ApiModel', source);

    out.hipLocalization = this.enumMapper.mapToString(source.hipLocalization);

    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_HipMRT_ApiModel', 'Localization_HipMRT_UiModel', source);

    this.enumMapper.mapToObject(source.hipLocalization, out.hipLocalization);

    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());

    return out;
  }
}
