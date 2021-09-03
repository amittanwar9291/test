import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { ThyroidApiModel } from '@models/neckMRT/api/thyroid/thyroid-api.model';
import { ThyroidFindingApiModel } from '@models/neckMRT/api/thyroid/thyroid-finding-api.model';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { ThyroidUiModel } from '@models/neckMRT/ui/thyroid/thyroid-ui.model';
import { ThyroidFindingMapper } from './thyroid-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class ThyroidMapper implements IMapper<ThyroidApiModel, ThyroidUiModel> {
  constructor(private thyroidFindingMapper: ThyroidFindingMapper) {
    automapper.createMap('Thyroid_NeckMRT_UiModel', 'Thyroid_NeckMRT_ApiModel').convertToType(ThyroidApiModel);
    automapper.createMap('Thyroid_NeckMRT_ApiModel', 'Thyroid_NeckMRT_UiModel').convertToType(ThyroidUiModel);
  }

  mapToAPI(source: ThyroidUiModel, out: ThyroidApiModel): ThyroidApiModel {
    out = automapper.map('Thyroid_NeckMRT_UiModel', 'Thyroid_NeckMRT_ApiModel', source);

    out.findings = source.findings.map((finding: ThyroidFindingUiModel) => {
      return this.thyroidFindingMapper.mapToAPI(finding, new ThyroidFindingApiModel());
    });

    return out;
  }

  mapToUI(source: ThyroidApiModel, out: ThyroidUiModel): ThyroidUiModel {
    out = automapper.map('Thyroid_NeckMRT_ApiModel', 'Thyroid_NeckMRT_UiModel', source);

    out.findings = source.findings.map((finding: ThyroidFindingApiModel) => {
      return this.thyroidFindingMapper.mapToUI(finding, new ThyroidFindingUiModel());
    });

    return out;
  }
}
