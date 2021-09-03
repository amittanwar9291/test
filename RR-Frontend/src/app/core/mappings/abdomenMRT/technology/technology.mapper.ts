import { Injectable } from '@angular/core';

import { TechnologyApiModel } from '@models/abdomenMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { SequenceApiModel } from '@models/abdomenMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/abdomenMRT/ui/technology/sequence-ui.model';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { SideEffectApiBaseModel } from '@models/shared/newTechnology/api/side-effect-api-base.model';

import { IMapper } from '@interfaces/mapper.interface';

import { SequenceMapper } from './sequence.mapper';
import { SideEffectMapper } from '@mappings/shared/technology/side-effect.mapper';
import { IMAGE_QUALITY_INPUT_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class TechnologyMapper implements IMapper<TechnologyApiModel, TechnologyUiModel> {
  constructor(private sideEffectMapper: SideEffectMapper, private sequenceMapper: SequenceMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('Technology_AbdomenMRT_ApiModel', 'Technology_AbdomenMRT_UiModel')
      .convertToType(TechnologyUiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('sequences', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Technology_AbdomenMRT_UiModel', 'Technology_AbdomenMRT_ApiModel')
      .convertToType(TechnologyApiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('sequences', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: TechnologyUiModel, out: TechnologyApiModel): TechnologyApiModel {
    out = automapper.map('Technology_AbdomenMRT_UiModel', 'Technology_AbdomenMRT_ApiModel', source);

    source.cmSideEffects.forEach(sideEffect => {
      out.cmSideEffects.push(this.sideEffectMapper.mapToAPI(sideEffect, new SideEffectApiBaseModel()));
    });
    source.sequences.forEach(sequence => {
      out.sequences.push(this.sequenceMapper.mapToAPI(sequence, new SequenceApiModel()));
    });

    out.imageQualityType = this.sliderMapper.mapSignalToAPI(IMAGE_QUALITY_INPUT_ARRAY, source.imageQualityType);
    return out;
  }

  mapToUI(source: TechnologyApiModel, out: TechnologyUiModel): TechnologyUiModel {
    out = automapper.map('Technology_AbdomenMRT_ApiModel', 'Technology_AbdomenMRT_UiModel', source);

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

    out.imageQualityType = this.sliderMapper.mapSignalToUI(IMAGE_QUALITY_INPUT_ARRAY, source.imageQualityType);
    return out;
  }
}
