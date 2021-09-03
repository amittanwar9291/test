import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { StudyAreaApiModel } from '@models/thoraxMRT/api/study-area/study-area-api.model';
import { StudyAreaUiModel } from '@models/thoraxMRT/ui/study-area/study-area-ui.model';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class StudyAreaMapper implements IMapper<StudyAreaApiModel, StudyAreaUiModel> {
  constructor(private patientInformationMapper: PatientInformationMapper) {
    automapper.createMap('StudyArea_ThoraxMRT_UiModel', 'StudyArea_ThoraxMRT_ApiModel').convertToType(StudyAreaApiModel);
    automapper.createMap('StudyArea_ThoraxMRT_ApiModel', 'StudyArea_ThoraxMRT_UiModel').convertToType(StudyAreaUiModel);
  }

  mapToAPI(source: StudyAreaUiModel, out: StudyAreaApiModel): StudyAreaApiModel {
    out = automapper.map('StudyArea_ThoraxMRT_UiModel', 'StudyArea_ThoraxMRT_ApiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: StudyAreaApiModel, out: StudyAreaUiModel): StudyAreaUiModel {
    out = automapper.map('StudyArea_ThoraxMRT_ApiModel', 'StudyArea_ThoraxMRT_UiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
