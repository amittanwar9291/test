import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CartilageAndLabrumApiModel } from '@models/hipMRT/api/cartilage-and-labrum/cartilage-and-labrum-api.model';
import { CartilageAndLabrumUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-ui.model';
import { CartilageAndLabrumFindingApiModel } from '@models/hipMRT/api/cartilage-and-labrum/cartilage-and-labrum-finding-api.model';
import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';

import { CartilageAndLabrumFindingsMapper } from './cartilage-and-labrum-findings-mapper';

@Injectable({
  providedIn: 'root'
})
export class CartilageAndLabrumMapper implements IMapper<CartilageAndLabrumApiModel, CartilageAndLabrumUiModel> {
  constructor(private cartilageAndLabrumFindingsMapper: CartilageAndLabrumFindingsMapper) {
    automapper
      .createMap('CartilageAndLabrum_HipMRT_ApiModel', 'CartilageAndLabrum_HipMRT_UiModel')
      .convertToType(CartilageAndLabrumUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('CartilageAndLabrum_HipMRT_UiModel', 'CartilageAndLabrum_HipMRT_ApiModel')
      .convertToType(CartilageAndLabrumApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: CartilageAndLabrumUiModel, out: CartilageAndLabrumApiModel): CartilageAndLabrumApiModel {
    out = automapper.map('CartilageAndLabrum_HipMRT_UiModel', 'CartilageAndLabrum_HipMRT_ApiModel', source);

    out.findings = source.findings.map(
      (finding: CartilageAndLabrumFindingUiModel): CartilageAndLabrumFindingApiModel => {
        return this.cartilageAndLabrumFindingsMapper.mapToAPI(finding, new CartilageAndLabrumFindingApiModel());
      }
    );

    return out;
  }

  mapToUI(source: CartilageAndLabrumApiModel, out: CartilageAndLabrumUiModel): CartilageAndLabrumUiModel {
    out = automapper.map('CartilageAndLabrum_HipMRT_ApiModel', 'CartilageAndLabrum_HipMRT_UiModel', source);

    out.findings = source.findings.map(
      (finding: CartilageAndLabrumFindingApiModel): CartilageAndLabrumFindingUiModel => {
        return this.cartilageAndLabrumFindingsMapper.mapToUI(finding, new CartilageAndLabrumFindingUiModel());
      }
    );

    return out;
  }
}
