import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { AreaOfInvestigationApiModel } from '@models/abdomenCT/api/area-of-investigation/area-of-investigation-api.model';
import { AreaOfInvestigationUiModel } from '@models/abdomenCT/ui/area-of-investigation/area-of-investigation-ui.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AreaOfInvestigationMapper implements IMapper<AreaOfInvestigationApiModel, AreaOfInvestigationUiModel> {
  constructor(private patientInformationMapper: PatientInformationMapper) {
    automapper
      .createMap('AreaOfInvestigation_AbdomenCT_UiModel', 'AreaOfInvestigation_AbdomenCT_ApiModel')
      .convertToType(AreaOfInvestigationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('AreaOfInvestigation_AbdomenCT_ApiModel', 'AreaOfInvestigation_AbdomenCT_UiModel')
      .convertToType(AreaOfInvestigationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AreaOfInvestigationUiModel, out: AreaOfInvestigationApiModel): AreaOfInvestigationApiModel {
    out = automapper.map('AreaOfInvestigation_AbdomenCT_UiModel', 'AreaOfInvestigation_AbdomenCT_ApiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());
    return out;
  }

  mapToUI(source: AreaOfInvestigationApiModel, out: AreaOfInvestigationUiModel): AreaOfInvestigationUiModel {
    out = automapper.map('AreaOfInvestigation_AbdomenCT_ApiModel', 'AreaOfInvestigation_AbdomenCT_UiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());
    return out;
  }
}
