import { Injectable } from '@angular/core';
import { LocalizationApiModel } from '@models/kneeMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/kneeMRT/ui/localization/localization-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_KneeMRT_UiModel', 'Localization_KneeMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('kneeLocation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Localization_KneeMRT_ApiModel', 'Localization_KneeMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('kneeLocation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_KneeMRT_UiModel', 'Localization_KneeMRT_ApiModel', source);
    out.kneeLocation = this.enumMapper.mapToString(source.kneeLocation);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_KneeMRT_ApiModel', 'Localization_KneeMRT_UiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    this.enumMapper.mapToObject(source.kneeLocation, out.kneeLocation);

    return out;
  }
}
