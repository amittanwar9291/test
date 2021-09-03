import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { SideEffectMapper } from '@mappings/shared/technology/side-effect.mapper';
import { AcquisitionMapper } from '@mappings/thoraxCT/technology/acquisition.mapper';

import { AcquisitionApiModel } from '@models/thoraxCT/api/technology/acquisition-api.model';
import { AcquisitionUiModel } from '@models/thoraxCT/ui/technology/acquisition-ui.model';
import { TechnologyApiModel } from '@models/thoraxCT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/thoraxCT/ui/technology/technology-ui.model';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { SideEffectApiBaseModel } from '@models/shared/newTechnology/api/side-effect-api-base.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyMapper implements IMapper<TechnologyApiModel, TechnologyUiModel> {
  constructor(private sideEffectMapper: SideEffectMapper, private acquisitionMapper: AcquisitionMapper) {
    automapper
      .createMap('Technology_ThoraxCT_UiModel', 'Technology_ThoraxCT_ApiModel')
      .convertToType(TechnologyApiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('acquisitions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Technology_ThoraxCT_ApiModel', 'Technology_ThoraxCT_UiModel')
      .convertToType(TechnologyUiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('acquisitions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: TechnologyUiModel, out: TechnologyApiModel): TechnologyApiModel {
    out = automapper.map('Technology_ThoraxCT_UiModel', 'Technology_ThoraxCT_ApiModel', source);

    source.cmSideEffects.forEach(sideEffect => {
      out.cmSideEffects.push(this.sideEffectMapper.mapToAPI(sideEffect, new SideEffectApiBaseModel()));
    });
    source.acquisitions.forEach(acquisition => {
      out.acquisitions.push(this.acquisitionMapper.mapToAPI(acquisition, new AcquisitionApiModel()));
    });

    return out;
  }

  mapToUI(source: TechnologyApiModel, out: TechnologyUiModel): TechnologyUiModel {
    out = automapper.map('Technology_ThoraxCT_ApiModel', 'Technology_ThoraxCT_UiModel', source);

    out.cmSideEffects.splice(0, out.cmSideEffects.length);
    out.acquisitions.splice(0, out.acquisitions.length);

    source.cmSideEffects.forEach(sideEffect => {
      if (!sideEffect.isDeleted) {
        out.cmSideEffects.push(this.sideEffectMapper.mapToUI(sideEffect, new SideEffectUiBaseModel()));
      }
    });
    source.acquisitions.forEach(acquisition => {
      if (!acquisition.isDeleted) {
        out.acquisitions.push(this.acquisitionMapper.mapToUI(acquisition, new AcquisitionUiModel()));
      }
    });

    return out;
  }
}
