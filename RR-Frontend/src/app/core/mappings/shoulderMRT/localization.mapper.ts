import { Injectable } from '@angular/core';
import { LocalizationApiModel } from '@models/shoulderMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/shoulderMRT/ui/localization/localization-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationMapper implements IMapper<LocalizationApiModel, LocalizationUiModel> {
  constructor(private enumMapper: EnumMapper, private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('LocalizationUiModel', 'LocalizationApiModel')
      .convertToType(LocalizationApiModel)
      .forSourceMember('localization', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('LocalizationApiModel', 'LocalizationUiModel')
      .convertToType(LocalizationUiModel)
      .forSourceMember('localization', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LocalizationUiModel, out: LocalizationApiModel): LocalizationApiModel {
    out = automapper.map('LocalizationUiModel', 'LocalizationApiModel', source);
    out.localization = this.enumMapper.mapToString(source.localization);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    return out;
  }

  mapToUI(source: LocalizationApiModel, out: LocalizationUiModel): LocalizationUiModel {
    out = automapper.map('LocalizationApiModel', 'LocalizationUiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    this.enumMapper.mapToObject(source.localization, out.localization);

    return out;
  }
}
