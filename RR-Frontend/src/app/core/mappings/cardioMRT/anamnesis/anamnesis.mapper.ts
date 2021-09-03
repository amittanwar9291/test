import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { IndicationFindingMapper } from '@mappings/cardioMRT/anamnesis/indication-finding.mapper';
import { InterventionOrPreOpsFindingMapper } from '@mappings/cardioMRT/anamnesis/intervention-or-pre-ops-finding.mapper';

import { AnamnesisApiModel } from '@models/cardioMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';
import { IndicationFindingUiModel } from '@models/cardioMRT/ui/anamnesis/indication-finding-ui.model';
import { IndicationFindingApiModel } from '@models/cardioMRT/api/anamnesis/indication-finding.api.model';
import { InterventionOrPreOpsFindingApiModel } from '@models/cardioMRT/api/anamnesis/intervention-or-pre-ops-finding-api.model';
import { InterventionOrPreOpsFindingUiModel } from '@models/cardioMRT/ui/anamnesis/intervention-or-pre-ops-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private indicationFindingMapper: IndicationFindingMapper,
    private interventionOrPreOpsFindingMapper: InterventionOrPreOpsFindingMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('Anamnesis_CardioMRT_UiModel', 'Anamnesis_CardioMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('indicationFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('interventionOrPreOpsFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Anamnesis_CardioMRT_ApiModel', 'Anamnesis_CardioMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('indicationFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('interventionOrPreOpsFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_CardioMRT_UiModel', 'Anamnesis_CardioMRT_ApiModel', source);

    out.indicationFindings.splice(0, out.indicationFindings.length);
    out.interventionOrPreOpsFindings.splice(0, out.interventionOrPreOpsFindings.length);
    source.indicationFindings.forEach((finding: IndicationFindingUiModel) => {
      out.indicationFindings.push(this.indicationFindingMapper.mapToAPI(finding, new IndicationFindingApiModel()));
    });
    source.interventionOrPreOpsFindings.forEach((finding: InterventionOrPreOpsFindingUiModel) => {
      out.interventionOrPreOpsFindings.push(
        this.interventionOrPreOpsFindingMapper.mapToAPI(finding, new InterventionOrPreOpsFindingApiModel())
      );
    });

    out.monthOfMRIPreExamination = this.monthYearMapper.mapToApi(source.dateOfMRIPreExamination);
    out.yearOfMRIPreExamination = source.dateOfMRIPreExamination.year;

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_CardioMRT_ApiModel', 'Anamnesis_CardioMRT_UiModel', source);

    out.indicationFindings.splice(0, out.indicationFindings.length);
    out.interventionOrPreOpsFindings.splice(0, out.interventionOrPreOpsFindings.length);
    source.indicationFindings.forEach((finding: IndicationFindingApiModel) => {
      out.indicationFindings.push(this.indicationFindingMapper.mapToUI(finding, new IndicationFindingUiModel()));
    });
    source.interventionOrPreOpsFindings.forEach((finding: InterventionOrPreOpsFindingApiModel) => {
      out.interventionOrPreOpsFindings.push(
        this.interventionOrPreOpsFindingMapper.mapToUI(finding, new InterventionOrPreOpsFindingUiModel())
      );
    });

    out.dateOfMRIPreExamination = new MonthYearModel(source.yearOfMRIPreExamination, source.monthOfMRIPreExamination);

    return out;
  }
}
