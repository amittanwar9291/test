import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { UpperArteriesApiModel } from '@models/angiographyMRT/api/upper-arteries/upper-arteries-api.model';
import { UpperArteriesUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-ui.model';
import { UpperArteriesFindingMapper } from '@mappings/angiographyMRT/upper-arteries/upper-arteries-finding.mapper';
import { UpperArteriesFindingApiModel } from '@models/angiographyMRT/api/upper-arteries/upper-arteries-finding-api.model';
import { UpperArteriesFindingUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class UpperArteriesMapper implements IMapper<UpperArteriesApiModel, UpperArteriesUiModel> {
  constructor(private upperArteriesFindingMapper: UpperArteriesFindingMapper) {
    automapper.createMap('UpperArteriesUiModel', 'UpperArteriesApiModel').convertToType(UpperArteriesApiModel);
    automapper.createMap('UpperArteriesApiModel', 'UpperArteriesUiModel').convertToType(UpperArteriesUiModel);
  }

  mapToAPI(source: UpperArteriesUiModel, out: UpperArteriesApiModel): UpperArteriesApiModel {
    out = automapper.map('UpperArteriesUiModel', 'UpperArteriesApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.upperArteriesFindingMapper.mapToAPI(finding, new UpperArteriesFindingApiModel()))
    );
    return out;
  }

  mapToUI(source: UpperArteriesApiModel, out: UpperArteriesUiModel): UpperArteriesUiModel {
    out = automapper.map('UpperArteriesApiModel', 'UpperArteriesUiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.upperArteriesFindingMapper.mapToUI(finding, new UpperArteriesFindingUiModel()))
    );
    return out;
  }
}
