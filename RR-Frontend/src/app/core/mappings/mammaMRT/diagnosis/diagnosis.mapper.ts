import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { DiagnosisUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-ui.model';
import { DiagnosisApiModel } from '@models/mammaMRT/api/diagnosis/diagnosis-api.model';
import { DiagnosisFindingApiModel } from '@models/mammaMRT/api/diagnosis/diagnosis-finding-api.model';
import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';

import { DiagnosisFindingMapper } from '@mappings/mammaMRT/diagnosis/diagnosis-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisMapper implements IMapper<DiagnosisApiModel, DiagnosisUiModel> {
  constructor(private findingMapper: DiagnosisFindingMapper) {
    automapper
      .createMap('Diagnosis_MammaMRT_ApiModel', 'Diagnosis_MammaMRT_UiModel')
      .convertToType(DiagnosisUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Diagnosis_MammaMRT_UiModel', 'Diagnosis_MammaMRT_ApiModel')
      .convertToType(DiagnosisApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: DiagnosisUiModel, out: DiagnosisApiModel): DiagnosisApiModel {
    out = automapper.map('Diagnosis_MammaMRT_UiModel', 'Diagnosis_MammaMRT_ApiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.findingMapper.mapToAPI(finding, new DiagnosisFindingApiModel()));
    }

    return out;
  }

  mapToUI(source: DiagnosisApiModel, out: DiagnosisUiModel): DiagnosisUiModel {
    out = automapper.map('Diagnosis_MammaMRT_ApiModel', 'Diagnosis_MammaMRT_UiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.findingMapper.mapToUI(finding, new DiagnosisFindingUiModel()));
    }

    return out;
  }
}
