import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LymphNodeDetailsMapper } from '@mappings/mammaMX/lymph-nodes/lymph-nodes-details.mapper';

import { LymphNodesFindingApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-nodes-finding-api.model';
import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { LymphNodeDetailsApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-node-details-api.model';
import { LymphNodeDetailsUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-node-details-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodeFindingMapper implements IMapper<LymphNodesFindingApiModel, LymphNodesFindingUiModel> {
  constructor(private lymphNodeDetailsMapper: LymphNodeDetailsMapper) {
    automapper
      .createMap('LymphNodesFinding_MammaMX_UiModel', 'LymphNodesFinding_MammaMX_ApiModel')
      .convertToType(LymphNodesFindingApiModel)
      .forSourceMember('rightLymphNodeDetails', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('leftLymphNodeDetails', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('LymphNodesFinding_MammaMX_ApiModel', 'LymphNodesFinding_MammaMX_UiModel')
      .convertToType(LymphNodesFindingUiModel)
      .forSourceMember('rightLymphNodeDetails', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('leftLymphNodeDetails', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LymphNodesFindingUiModel, out: LymphNodesFindingApiModel): LymphNodesFindingApiModel {
    out = automapper.map('LymphNodesFinding_MammaMX_UiModel', 'LymphNodesFinding_MammaMX_ApiModel', source);
    out.rightLymphNodeDetails = source.rightLymphNodeDetails
      ? this.lymphNodeDetailsMapper.mapToAPI(source.rightLymphNodeDetails, new LymphNodeDetailsApiModel())
      : null;
    out.leftLymphNodeDetails = source.leftLymphNodeDetails
      ? this.lymphNodeDetailsMapper.mapToAPI(source.leftLymphNodeDetails, new LymphNodeDetailsApiModel())
      : null;

    return out;
  }

  mapToUI(source: LymphNodesFindingApiModel, out: LymphNodesFindingUiModel): LymphNodesFindingUiModel {
    out = automapper.map('LymphNodesFinding_MammaMX_ApiModel', 'LymphNodesFinding_MammaMX_UiModel', source);
    out.rightLymphNodeDetails = source.rightLymphNodeDetails
      ? this.lymphNodeDetailsMapper.mapToUI(source.rightLymphNodeDetails, new LymphNodeDetailsUiModel())
      : new LymphNodeDetailsUiModel();
    out.leftLymphNodeDetails = source.leftLymphNodeDetails
      ? this.lymphNodeDetailsMapper.mapToUI(source.leftLymphNodeDetails, new LymphNodeDetailsUiModel())
      : new LymphNodeDetailsUiModel();

    return out;
  }
}
