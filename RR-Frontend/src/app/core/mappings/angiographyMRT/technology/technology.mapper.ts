import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { MethodMapper } from '@mappings/angiographyMRT/technology/method-mapper';

import { TechnologyApiModel } from '@models/angiographyMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/angiographyMRT/ui/technology/technology-ui.model';
import { MethodApiModel } from '@models/angiographyMRT/api/technology/method-api.model';
import { MethodUiModel } from '@models/angiographyMRT/ui/technology/method-ui.model';
import { SideEffectMapper } from '@mappings/shared/technology/side-effect.mapper';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { SideEffectApiBaseModel } from '@models/shared/newTechnology/api/side-effect-api-base.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyMapper implements IMapper<TechnologyApiModel, TechnologyUiModel> {
  constructor(private sideEffectMapper: SideEffectMapper, private methodMapper: MethodMapper) {
    automapper
      .createMap('Technology_AngiographyMRT_UiModel', 'Technology_AngiographyMRT_ApiModel')
      .convertToType(TechnologyApiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('sequences', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Technology_AngiographyMRT_ApiModel', 'Technology_AngiographyMRT_UiModel')
      .convertToType(TechnologyUiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('sequences', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: TechnologyUiModel, out: TechnologyApiModel): TechnologyApiModel {
    out = automapper.map('Technology_AngiographyMRT_UiModel', 'Technology_AngiographyMRT_ApiModel', source);

    source.cmSideEffects.forEach(sideEffect => {
      out.cmSideEffects.push(this.sideEffectMapper.mapToAPI(sideEffect, new SideEffectApiBaseModel()));
    });
    source.sequences.forEach(method => {
      out.sequences.push(this.methodMapper.mapToAPI(method, new MethodApiModel()));
    });
    return out;
  }

  mapToUI(source: TechnologyApiModel, out: TechnologyUiModel): TechnologyUiModel {
    out = automapper.map('Technology_AngiographyMRT_ApiModel', 'Technology_AngiographyMRT_UiModel', source);

    out.cmSideEffects.splice(0, out.cmSideEffects.length);
    out.sequences.splice(0, out.sequences.length);

    source.cmSideEffects.forEach(sideEffect => {
      if (!sideEffect.isDeleted) {
        out.cmSideEffects.push(this.sideEffectMapper.mapToUI(sideEffect, new SideEffectUiBaseModel()));
      }
    });
    source.sequences.forEach(acquisition => {
      if (!acquisition.isDeleted) {
        out.sequences.push(this.methodMapper.mapToUI(acquisition, new MethodUiModel()));
      }
    });
    return out;
  }
}
