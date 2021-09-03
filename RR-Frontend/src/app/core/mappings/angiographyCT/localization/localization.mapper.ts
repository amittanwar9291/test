import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LocalizationApiModel } from '@models/angiographyCT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/angiographyCT/ui/localization/localization-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Localization_AngioCT_UiModel', 'Localization_AngioCT_ApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Localization_AngioCT_ApiModel', 'Localization_AngioCT_UiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('Localization_AngioCT_UiModel', 'Localization_AngioCT_ApiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    out.localization = this.enumMapper.mapToString(source.localization);
    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('Localization_AngioCT_ApiModel', 'Localization_AngioCT_UiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    this.enumMapper.mapToObject(source.localization, out.localization);
    return out;
  }
}
