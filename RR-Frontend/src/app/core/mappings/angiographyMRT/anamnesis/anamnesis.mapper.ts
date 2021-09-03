import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisApiModel } from '@models/angiographyMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/angiographyMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisIndicationFindingMapper } from '@mappings/angiographyMRT/anamnesis/anamnesis-indication-finding.mapper';
import { AnamnesisIndicationFindingUiModel } from '@models/angiographyMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { AnamnesisIndicationFindingApiModel } from '@models/angiographyMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  checkYearAndGetMont = (date: MonthYearModel): number => (date.year === 0 || date.year === -1 ? 0 : date.month);

  constructor(private anamnesisIndicationFindingMapper: AnamnesisIndicationFindingMapper) {
    automapper.createMap('Anamnesis_AngioMRT_UiModel', 'Anamnesis_AngioMRT_ApiModel').convertToType(AnamnesisApiModel);
    automapper.createMap('Anamnesis_AngioMRT_ApiModel', 'Anamnesis_AngioMRT_UiModel').convertToType(AnamnesisUiModel);
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_AngioMRT_UiModel', 'Anamnesis_AngioMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach((finding: AnamnesisIndicationFindingUiModel) => {
      out.findings.push(this.anamnesisIndicationFindingMapper.mapToAPI(finding, new AnamnesisIndicationFindingApiModel()));
    });

    out.yearMRAngiography = source.dateMRAngiography.year;
    out.monthMRAngiography = this.checkYearAndGetMont(source.dateMRAngiography);
    out.yearCTAngiography = source.dateCTAngiography.year;
    out.monthCTAngiography = this.checkYearAndGetMont(source.dateCTAngiography);
    out.yearDigitalSubtractionAngiography = source.dateDigitalSubtractionAngiography.year;
    out.monthDigitalSubtractionAngiography = this.checkYearAndGetMont(source.dateDigitalSubtractionAngiography);

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_AngioMRT_ApiModel', 'Anamnesis_AngioMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach((finding: AnamnesisIndicationFindingApiModel) => {
      out.findings.push(this.anamnesisIndicationFindingMapper.mapToUI(finding, new AnamnesisIndicationFindingUiModel()));
    });

    out.dateMRAngiography.year = source.yearMRAngiography;
    out.dateMRAngiography.month = source.monthMRAngiography;
    out.dateCTAngiography.year = source.yearCTAngiography;
    out.dateCTAngiography.month = source.monthCTAngiography;
    out.dateDigitalSubtractionAngiography.year = source.yearDigitalSubtractionAngiography;
    out.dateDigitalSubtractionAngiography.month = source.monthDigitalSubtractionAngiography;

    return out;
  }
}
