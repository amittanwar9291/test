import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { UpperArteriesApiModel } from '@models/angiographyCT/api/upper-arteries/upper-arteries-api.model';
import { UpperArteriesUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-ui.model';
import { UpperArteriesFindingMapper } from '@mappings/angiographyCT/upper-arteries/upper-arteries-finding.mapper';
import { UpperArteriesFindingApiModel } from '@models/angiographyCT/api/upper-arteries/upper-arteries-finding-api.model';
import { UpperArteriesFindingUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class UpperArteriesMapper implements IMapper<UpperArteriesApiModel, UpperArteriesUiModel> {
  constructor(private upperArteriesFindingMapper: UpperArteriesFindingMapper) {
    automapper
      .createMap('UpperArteries_AngiographyCT_UiModel', 'UpperArteries_AngiographyCT_ApiModel')
      .convertToType(UpperArteriesApiModel);
    automapper.createMap('UpperArteries_AngiographyCT_ApiModel', 'UpperArteries_AngiographyCT_UiModel').convertToType(UpperArteriesUiModel);
  }

  mapToAPI(source: UpperArteriesUiModel, out: UpperArteriesApiModel): UpperArteriesApiModel {
    out = automapper.map('UpperArteries_AngiographyCT_UiModel', 'UpperArteries_AngiographyCT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.upperArteriesFindingMapper.mapToAPI(finding, new UpperArteriesFindingApiModel()))
    );

    return out;
  }

  mapToUI(source: UpperArteriesApiModel, out: UpperArteriesUiModel): UpperArteriesUiModel {
    out = automapper.map('UpperArteries_AngiographyCT_ApiModel', 'UpperArteries_AngiographyCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.upperArteriesFindingMapper.mapToUI(finding, new UpperArteriesFindingUiModel()))
    );

    return out;
  }
}
