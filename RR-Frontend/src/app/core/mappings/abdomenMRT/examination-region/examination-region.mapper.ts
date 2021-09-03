import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';

import { ExaminationRegionApiModel } from '@models/abdomenMRT/api/examination-region/examination-region-api.model';
import { ExaminationRegionUiModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationRegionMapper implements IMapper<ExaminationRegionApiModel, ExaminationRegionUiModel> {
  constructor(private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('ExaminationRegion_AbdomenMRT_UiModel', 'ExaminationRegion_AbdomenMRT_ApiModel')
      .convertToType(ExaminationRegionApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('ExaminationRegion_AbdomenMRT_ApiModel', 'ExaminationRegion_AbdomenMRT_UiModel')
      .convertToType(ExaminationRegionUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: ExaminationRegionUiModel, out: ExaminationRegionApiModel): ExaminationRegionApiModel {
    out = automapper.map('ExaminationRegion_AbdomenMRT_UiModel', 'ExaminationRegion_AbdomenMRT_ApiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: ExaminationRegionApiModel, out: ExaminationRegionUiModel): ExaminationRegionUiModel {
    out = automapper.map('ExaminationRegion_AbdomenMRT_ApiModel', 'ExaminationRegion_AbdomenMRT_UiModel', source);
    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
