import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';
import { CartilageAndLabrumFindingApiModel } from '@models/hipMRT/api/cartilage-and-labrum/cartilage-and-labrum-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class CartilageAndLabrumFindingsMapper implements IMapper<CartilageAndLabrumFindingApiModel, CartilageAndLabrumFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('CartilageAndLabrumFinding_HipMRT_ApiModel', 'CartilageAndLabrumFinding_HipMRT_UiModel')
      .convertToType(CartilageAndLabrumFindingUiModel);
    automapper
      .createMap('CartilageAndLabrumFinding_HipMRT_UiModel', 'CartilageAndLabrumFinding_HipMRT_ApiModel')
      .convertToType(CartilageAndLabrumFindingApiModel);
  }

  mapToAPI(source: CartilageAndLabrumFindingUiModel, out: CartilageAndLabrumFindingApiModel): CartilageAndLabrumFindingApiModel {
    out = automapper.map('CartilageAndLabrumFinding_HipMRT_UiModel', 'CartilageAndLabrumFinding_HipMRT_ApiModel', source);
    out.cartilageLocalizer = this.enumMapper.mapToString(source.cartilageLocalizer);
    return out;
  }

  mapToUI(source: CartilageAndLabrumFindingApiModel, out: CartilageAndLabrumFindingUiModel): CartilageAndLabrumFindingUiModel {
    out = automapper.map('CartilageAndLabrumFinding_HipMRT_ApiModel', 'CartilageAndLabrumFinding_HipMRT_UiModel', source);
    this.enumMapper.mapToObject(source.cartilageLocalizer, out.cartilageLocalizer);
    return out;
  }
}
