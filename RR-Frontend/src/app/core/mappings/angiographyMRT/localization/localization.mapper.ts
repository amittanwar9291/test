import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LocalizationApiModel } from '@models/angiographyMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/angiographyMRT/ui/localization/localization-ui.model';
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
      .createMap('Localization_AngioMRT_UiModel', 'Localization_AngioMRT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Localization_AngioMRT_ApiModel', 'Localization_AngioMRT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_AngioMRT_UiModel', 'Localization_AngioMRT_ApiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    out.localization = this.enumMapper.mapToString(source.localization);
    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_AngioMRT_ApiModel', 'Localization_AngioMRT_UiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    this.enumMapper.mapToObject(source.localization, out.localization);
    return out;
  }
}
