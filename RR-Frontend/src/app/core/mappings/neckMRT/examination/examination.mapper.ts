import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { ExaminationApiModel } from '@models/neckMRT/api/examination/examination-api.model';
import { ExaminationUiModel } from '@models/neckMRT/ui/examination/examination-ui.model';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationMapper implements IMapper<ExaminationApiModel, ExaminationUiModel> {
  constructor(private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('Examination_NeckMRT_UiModel', 'Examination_NeckMRT_ApiModel')
      .convertToType(ExaminationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Examination_NeckMRT_ApiModel', 'Examination_NeckMRT_UiModel')
      .convertToType(ExaminationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: ExaminationUiModel, out: ExaminationApiModel): ExaminationApiModel {
    out = automapper.map('Examination_NeckMRT_UiModel', 'Examination_NeckMRT_ApiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: ExaminationApiModel, out: ExaminationUiModel): ExaminationUiModel {
    out = automapper.map('Examination_NeckMRT_ApiModel', 'Examination_NeckMRT_UiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
