import { Injectable } from '@angular/core';

import { LabrumAndRibbonsApiModel } from '@models/shoulderMRT/api/labrum-and-ribbons/labrum-and-ribbons-api.model';
import { LabrumAndRibbonsUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { LabrumAndRibbonsFindingsMapper } from './labrum-and-ribbons-findings.mapper';
import { LabrumAndRibbonsFindingApiModel } from '@models/shoulderMRT/api/labrum-and-ribbons/labrum-and-ribbons-findings-api.model';
import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LabrumAndRibbonsMapper implements IMapper<LabrumAndRibbonsApiModel, LabrumAndRibbonsUiModel> {
  constructor(private LabrumAndRibbonsFindingMapper: LabrumAndRibbonsFindingsMapper) {
    automapper
      .createMap('LabrumAndRibbons_ShoulderMRT_UIModel', 'LabrumAndRibbons_ShoulderMRT_ApiModel')
      .convertToType(LabrumAndRibbonsApiModel);
    automapper
      .createMap('LabrumAndRibbons_ShoulderMRT_ApiModel', 'LabrumAndRibbons_ShoulderMRT_UIModel')
      .convertToType(LabrumAndRibbonsUiModel);
  }

  mapToAPI(source: LabrumAndRibbonsUiModel, out: LabrumAndRibbonsApiModel): LabrumAndRibbonsApiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.LabrumAndRibbonsFindingMapper.mapToAPI(finding, new LabrumAndRibbonsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: LabrumAndRibbonsApiModel, out: LabrumAndRibbonsUiModel): LabrumAndRibbonsUiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.LabrumAndRibbonsFindingMapper.mapToUI(finding, new LabrumAndRibbonsFindingUiModel()));
    });
    return out;
  }
}
