import { Injectable } from '@angular/core';

import { StudyAreaApiModel } from '@models/thoraxCT/api/study-area/study-area-api.model';
import { StudyAreaUiModel } from '@models/thoraxCT/ui/study-area/study-area-ui.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';

@Injectable({
  providedIn: 'root'
})
export class StudyAreaMapper implements IMapper<StudyAreaApiModel, StudyAreaUiModel> {
  constructor(private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('StudyArea_ThoraxCT_UiModel', 'StudyArea_ThoraxCT_ApiModel')
      .convertToType(StudyAreaApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('StudyArea_ThoraxCT_ApiModel', 'StudyArea_ThoraxCT_UiModel')
      .convertToType(StudyAreaUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: StudyAreaUiModel, out: StudyAreaApiModel): StudyAreaApiModel {
    out = automapper.map('StudyArea_ThoraxCT_UiModel', 'StudyArea_ThoraxCT_ApiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: StudyAreaApiModel, out: StudyAreaUiModel): StudyAreaUiModel {
    out = automapper.map('StudyArea_ThoraxCT_ApiModel', 'StudyArea_ThoraxCT_UiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
