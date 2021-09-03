import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { NerveCompressionFindingApiModel } from '@models/handMRT/api/nerve-compression/nerve-compression-finding-api.model';
import { NerveCompressionFindingUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class NerveCompressionFindingMapper implements IMapper<NerveCompressionFindingApiModel, NerveCompressionFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('NerveCompressionFinding_HandMRT_ApiModel', 'NerveCompressionFinding_HandMRT_UiModel')
      .convertToType(NerveCompressionFindingUiModel);
    automapper
      .createMap('NerveCompressionFinding_HandMRT_UiModel', 'NerveCompressionFinding_HandMRT_ApiModel')
      .convertToType(NerveCompressionFindingApiModel);
  }

  mapToAPI(source: NerveCompressionFindingUiModel, out: NerveCompressionFindingApiModel): NerveCompressionFindingApiModel {
    out = automapper.map('NerveCompressionFinding_HandMRT_UiModel', 'NerveCompressionFinding_HandMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: NerveCompressionFindingApiModel, out: NerveCompressionFindingUiModel): NerveCompressionFindingUiModel {
    out = automapper.map('NerveCompressionFinding_HandMRT_ApiModel', 'NerveCompressionFinding_HandMRT_UiModel', source);

    return out;
  }
}
