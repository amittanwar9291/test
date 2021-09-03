import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SideEffectMapper } from '@mappings/shared/technology/side-effect.mapper';
import { AcquisitionMapper } from '@mappings/angiographyCT/technology/acquisition.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { IMAGE_QUALITY_INPUT_ARRAY } from '@mappings/shared/slider/sliderConstants';

import { TechnologyApiModel } from '@models/angiographyCT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';
import { SideEffectApiBaseModel } from '@models/shared/newTechnology/api/side-effect-api-base.model';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { AcquisitionUiModel } from '@models/angiographyCT/ui/technology/acquisition-ui.model';
import { AcquisitionApiModel } from '@models/angiographyCT/api/technology/acquisition-api.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyMapper implements IMapper<TechnologyApiModel, TechnologyUiModel> {
  constructor(
    private sideEffectMapper: SideEffectMapper,
    private acquisitionMapper: AcquisitionMapper,
    private sliderMapper: SliderMapper
  ) {
    automapper
      .createMap('Technology_AngiographyCT_UiModel', 'Technology_AngiographyCT_ApiModel')
      .convertToType(TechnologyApiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('acquisitions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Technology_AngiographyCT_ApiModel', 'Technology_AngiographyCT_UiModel')
      .convertToType(TechnologyUiModel)
      .forSourceMember('cmSideEffects', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('acquisitions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: TechnologyUiModel, out: TechnologyApiModel): TechnologyApiModel {
    out = automapper.map('Technology_AngiographyCT_UiModel', 'Technology_AngiographyCT_ApiModel', source);

    source.cmSideEffects.forEach(sideEffect => {
      out.cmSideEffects.push(this.sideEffectMapper.mapToAPI(sideEffect, new SideEffectApiBaseModel()));
    });
    source.acquisitions.forEach(acquisition => {
      out.acquisitions.push(this.acquisitionMapper.mapToAPI(acquisition, new AcquisitionApiModel()));
    });

    out.imageQualityType = this.sliderMapper.mapSignalToAPI(IMAGE_QUALITY_INPUT_ARRAY, source.imageQualityType);

    return out;
  }

  mapToUI(source: TechnologyApiModel, out: TechnologyUiModel): TechnologyUiModel {
    out = automapper.map('Technology_AngiographyCT_ApiModel', 'Technology_AngiographyCT_UiModel', source);

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

    out.imageQualityType = this.sliderMapper.mapSignalToUI(IMAGE_QUALITY_INPUT_ARRAY, source.imageQualityType);

    return out;
  }
}
