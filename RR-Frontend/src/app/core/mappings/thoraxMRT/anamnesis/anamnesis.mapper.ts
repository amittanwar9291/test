import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisApiModel } from '@models/thoraxMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisFindingMapper } from '@mappings/thoraxMRT/anamnesis/anamnesis-finding.mapper';
import { IndicationFindingMapper } from '@mappings/thoraxMRT/anamnesis/indication-finding.mapper';
import { AnamnesisFindingApiModel } from '@models/thoraxMRT/api/anamnesis/anamnesis-finding-api.model';
import { AnamnesisFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { IndicationFindingApiModel } from '@models/thoraxMRT/api/anamnesis/indication-finding-api.model';
import { IndicationFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/indication-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private anamnesisFindingMapper: AnamnesisFindingMapper,
    private indicationFindingMapper: IndicationFindingMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper.createMap('Anamnesis_ThoraxMRT_UiModel', 'Anamnesis_ThoraxMRT_ApiModel').convertToType(AnamnesisApiModel);
    automapper.createMap('Anamnesis_ThoraxMRT_ApiModel', 'Anamnesis_ThoraxMRT_UiModel').convertToType(AnamnesisUiModel);
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_ThoraxMRT_UiModel', 'Anamnesis_ThoraxMRT_ApiModel', source);

    out.mriPreliminaryExaminationMonth = this.monthYearMapper.mapToApi(source.mriPreliminaryExaminationDate);
    out.mriPreliminaryExaminationYear = source.mriPreliminaryExaminationDate.year;

    out.ctPreliminaryExaminationMonth = this.monthYearMapper.mapToApi(source.ctPreliminaryExaminationDate);
    out.ctPreliminaryExaminationYear = source.ctPreliminaryExaminationDate.year;

    out.anamnesisFindings.splice(0, out.anamnesisFindings.length);
    source.anamnesisFindings?.forEach(finding =>
      out.anamnesisFindings.push(this.anamnesisFindingMapper.mapToAPI(finding, new AnamnesisFindingApiModel()))
    );

    out.indicationFindings.splice(0, out.indicationFindings.length);
    source.indicationFindings?.forEach(finding =>
      out.indicationFindings.push(this.indicationFindingMapper.mapToAPI(finding, new IndicationFindingApiModel()))
    );

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_ThoraxMRT_ApiModel', 'Anamnesis_ThoraxMRT_UiModel', source);

    out.mriPreliminaryExaminationDate.month = source.mriPreliminaryExaminationMonth;
    out.mriPreliminaryExaminationDate.year = source.mriPreliminaryExaminationYear;

    out.ctPreliminaryExaminationDate.month = source.ctPreliminaryExaminationMonth;
    out.ctPreliminaryExaminationDate.year = source.ctPreliminaryExaminationYear;

    out.anamnesisFindings.splice(0, out.anamnesisFindings.length);
    source.anamnesisFindings?.forEach(finding =>
      out.anamnesisFindings.push(this.anamnesisFindingMapper.mapToUI(finding, new AnamnesisFindingUiModel()))
    );

    out.indicationFindings.splice(0, out.indicationFindings.length);
    source.indicationFindings?.forEach(finding =>
      out.indicationFindings.push(this.indicationFindingMapper.mapToUI(finding, new IndicationFindingUiModel()))
    );

    return out;
  }
}
