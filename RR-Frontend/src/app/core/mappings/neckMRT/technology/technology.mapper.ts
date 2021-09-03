import { SequenceMapper } from './sequence.mapper';
import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SideEffectMapper } from '@mappings/shared/technology/side-effect.mapper';
import { SequenceApiModel } from '@models/neckMRT/api/technology/sequence-api.model';
import { TechnologyApiModel } from '@models/neckMRT/api/technology/technology-api.model';
import { SequenceUiModel } from '@models/neckMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { SideEffectApiBaseModel } from '@models/shared/newTechnology/api/side-effect-api-base.model';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyMapper implements IMapper<TechnologyApiModel, TechnologyUiModel> {
  constructor(private sideEffectMapper: SideEffectMapper, private sequenceMapper: SequenceMapper) {
    automapper
      .createMap('Technology_NeckMRT_UiModel', 'Technology_NeckMRT_ApiModel')
      .convertToType(TechnologyApiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('sequences', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Technology_NeckMRT_ApiModel', 'Technology_NeckMRT_UiModel')
      .convertToType(TechnologyUiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('sequences', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: TechnologyUiModel, out: TechnologyApiModel): TechnologyApiModel {
    out = automapper.map('Technology_NeckMRT_UiModel', 'Technology_NeckMRT_ApiModel', source);

    source.cmSideEffects.forEach(sideEffect => {
      out.cmSideEffects.push(this.sideEffectMapper.mapToAPI(sideEffect, new SideEffectApiBaseModel()));
    });
    source.sequences.forEach(sequence => {
      out.sequences.push(this.sequenceMapper.mapToAPI(sequence, new SequenceApiModel()));
    });

    return out;
  }

  mapToUI(source: TechnologyApiModel, out: TechnologyUiModel): TechnologyUiModel {
    out = automapper.map('Technology_NeckMRT_ApiModel', 'Technology_NeckMRT_UiModel', source);

    out.cmSideEffects.splice(0, out.cmSideEffects.length);
    out.sequences.splice(0, out.sequences.length);

    source.cmSideEffects.forEach(sideEffect => {
      if (!sideEffect.isDeleted) {
        out.cmSideEffects.push(this.sideEffectMapper.mapToUI(sideEffect, new SideEffectUiBaseModel()));
      }
    });
    source.sequences.forEach(sequence => {
      if (!sequence.isDeleted) {
        out.sequences.push(this.sequenceMapper.mapToUI(sequence, new SequenceUiModel()));
      }
    });

    return out;
  }
}
