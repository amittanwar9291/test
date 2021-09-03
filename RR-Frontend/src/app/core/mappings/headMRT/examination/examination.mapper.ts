import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { ExaminationApiModel } from '@models/headMRT/api/examination/examination-api.model';
import { ExaminationUiModel } from '@models/headMRT/ui/examination/examination-ui.model';
import { ExaminationIndicationUiModel } from '@models/headMRT/ui/examination/examination-indication-ui.model';
import { ExaminationIndicationApiModel } from '@models/headMRT/api/examination/examination-indication-api.model';
import { ExaminationIndicationMapper } from '@mappings/headMRT/examination/examination-indication.mapper';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationMapper implements IMapper<ExaminationApiModel, ExaminationUiModel> {
  constructor(
    private examinationIndicationMapper: ExaminationIndicationMapper,
    private patientInformationMapper: PatientInformationMapper
  ) {
    automapper
      .createMap('Examination_HeadMRT_UiModel', 'Examination_HeadMRT_ApiModel')
      .convertToType(ExaminationApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Examination_HeadMRT_ApiModel', 'Examination_HeadMRT_UiModel')
      .convertToType(ExaminationUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: ExaminationUiModel, out: ExaminationApiModel): ExaminationApiModel {
    out = automapper.map('Examination_HeadMRT_UiModel', 'Examination_HeadMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.examinationIndicationMapper.mapToAPI(finding, new ExaminationIndicationApiModel()))
    );
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: ExaminationApiModel, out: ExaminationUiModel): ExaminationUiModel {
    out = automapper.map('Examination_HeadMRT_ApiModel', 'Examination_HeadMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.examinationIndicationMapper.mapToUI(finding, new ExaminationIndicationUiModel()))
    );
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
