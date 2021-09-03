import { Injectable } from '@angular/core';

import { AreaOfExaminationApiModel } from '@models/cardioMRT/api/area-of-examination/area-of-examination-api.model';
import { AreaOfExaminationUiModel } from '@models/cardioMRT/ui/area-of-examination/area-of-examination-ui.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';

@Injectable({
  providedIn: 'root'
})
export class AreaOfExaminationMapper implements IMapper<AreaOfExaminationApiModel, AreaOfExaminationUiModel> {
  constructor(private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('AreaOfExaminationUiModel', 'AreaOfExaminationApiModel')
      .convertToType(AreaOfExaminationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('AreaOfExaminationApiModel', 'AreaOfExaminationUiModel')
      .convertToType(AreaOfExaminationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AreaOfExaminationUiModel, out: AreaOfExaminationApiModel): AreaOfExaminationApiModel {
    out = automapper.map('AreaOfExaminationUiModel', 'AreaOfExaminationApiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: AreaOfExaminationApiModel, out: AreaOfExaminationUiModel): AreaOfExaminationUiModel {
    out = automapper.map('AreaOfExaminationApiModel', 'AreaOfExaminationUiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
