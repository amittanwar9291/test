import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { IndicationApiModel } from '@models/neckMRT/api/indication/indication-api.model';
import { IndicationUiModel } from '@models/neckMRT/ui/indication/indication-ui.model';
import { PreviousTherapyApiModel } from '@models/neckMRT/api/indication/previous-therapy-api.model';
import { PreviousTherapyUiModel } from '@models/neckMRT/ui/indication/previous-therapy-ui.model';
import { IndicationFindingApiModel } from '@models/neckMRT/api/indication/indication-finding-api.model';
import { IndicationFindingUiModel } from '@models/neckMRT/ui/indication/indication-finding-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { IndicationFindingMapper } from '@mappings/neckMRT/indication/indication-finding.mapper';
import { PreviousTherapiesMapper } from '@mappings/neckMRT/indication/previous-therapies.mapper';

@Injectable({
  providedIn: 'root'
})
export class IndicationMapper implements IMapper<IndicationApiModel, IndicationUiModel> {
  constructor(
    private indicationFindingMapper: IndicationFindingMapper,
    private previousTherapiesMapper: PreviousTherapiesMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper.createMap('Indication_NeckMRT_UiModel', 'Indication_NeckMRT_ApiModel').convertToType(IndicationApiModel);
    automapper.createMap('Indication_NeckMRT_ApiModel', 'Indication_NeckMRT_UiModel').convertToType(IndicationUiModel);
  }

  mapToAPI(source: IndicationUiModel, out: IndicationApiModel): IndicationApiModel {
    out = automapper.map('Indication_NeckMRT_UiModel', 'Indication_NeckMRT_ApiModel', source);

    out.monthOfMRI = this.monthYearMapper.mapToApi(source.dateOfMRI);
    out.yearOfMRI = source.dateOfMRI.year;

    out.monthOfCT = this.monthYearMapper.mapToApi(source.dateOfCT);
    out.yearOfCT = source.dateOfCT.year;

    out.monthOfSonography = this.monthYearMapper.mapToApi(source.dateOfSonography);
    out.yearOfSonography = source.dateOfSonography.year;

    out.indications.splice(0, out.indications.length);
    source.indications?.forEach(finding =>
      out.indications.push(this.indicationFindingMapper.mapToAPI(finding, new IndicationFindingApiModel()))
    );

    out.previousTherapies.splice(0, out.previousTherapies.length);
    source.previousTherapies?.forEach(finding =>
      out.previousTherapies.push(this.previousTherapiesMapper.mapToAPI(finding, new PreviousTherapyApiModel()))
    );

    return out;
  }

  mapToUI(source: IndicationApiModel, out: IndicationUiModel): IndicationUiModel {
    out = automapper.map('Indication_NeckMRT_ApiModel', 'Indication_NeckMRT_UiModel', source);

    out.dateOfMRI.month = source.monthOfMRI;
    out.dateOfMRI.year = source.yearOfMRI;

    out.dateOfCT.month = source.monthOfCT;
    out.dateOfCT.year = source.yearOfCT;

    out.dateOfSonography.month = source.monthOfSonography;
    out.dateOfSonography.year = source.yearOfSonography;

    out.indications.splice(0, out.indications.length);
    source.indications?.forEach(finding =>
      out.indications.push(this.indicationFindingMapper.mapToUI(finding, new IndicationFindingUiModel()))
    );

    out.previousTherapies.splice(0, out.previousTherapies.length);
    source.previousTherapies?.forEach(finding =>
      out.previousTherapies.push(this.previousTherapiesMapper.mapToUI(finding, new PreviousTherapyUiModel()))
    );

    return out;
  }
}
