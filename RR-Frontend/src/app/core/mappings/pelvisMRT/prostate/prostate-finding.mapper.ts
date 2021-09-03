import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { ProstateFindingApiModel } from '@models/pelvisMRT/api/prostate/prostate-finding-api.model';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { FIVE_NUMBER_INPUT_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class ProstateFindingMapper implements IMapper<ProstateFindingApiModel, ProstateFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('ProstateFinding_PelvisMRT_ApiModel', 'ProstateFinding_PelvisMRT_UiModel').convertToType(ProstateFindingUiModel);
    automapper.createMap('ProstateFinding_PelvisMRT_UiModel', 'ProstateFinding_PelvisMRT_ApiModel').convertToType(ProstateFindingApiModel);
  }

  mapToAPI(source: ProstateFindingUiModel, out: ProstateFindingApiModel): ProstateFindingApiModel {
    out = automapper.map('ProstateFinding_PelvisMRT_UiModel', 'ProstateFinding_PelvisMRT_ApiModel', source);

    out.sliderPiradasScoreType = this.sliderMapper.mapSignalToAPI(FIVE_NUMBER_INPUT_ARRAY, source.sliderPiradasScoreType - 1);

    out.localizationT1wSignalEnhancementType = this.enumMapper.mapToString(source.localizationT1wSignalEnhancementType);
    out.transitionaZoneTZLocalizerType = this.enumMapper.mapToString(source.transitionaZoneTZLocalizerType);
    out.peripheralZonePZLocalizerType = this.enumMapper.mapToString(source.peripheralZonePZLocalizerType);
    out.centralZoneCZLocalizerType = this.enumMapper.mapToString(source.centralZoneCZLocalizerType);

    return out;
  }

  mapToUI(source: ProstateFindingApiModel, out: ProstateFindingUiModel): ProstateFindingUiModel {
    out = automapper.map('ProstateFinding_PelvisMRT_ApiModel', 'ProstateFinding_PelvisMRT_UiModel', source);

    out.sliderPiradasScoreType = this.sliderMapper.mapSignalToUI(FIVE_NUMBER_INPUT_ARRAY, source.sliderPiradasScoreType) + 1;

    this.enumMapper.mapToObject(source.localizationT1wSignalEnhancementType, out.localizationT1wSignalEnhancementType);
    this.enumMapper.mapToObject(source.transitionaZoneTZLocalizerType, out.transitionaZoneTZLocalizerType);
    this.enumMapper.mapToObject(source.peripheralZonePZLocalizerType, out.peripheralZonePZLocalizerType);
    this.enumMapper.mapToObject(source.centralZoneCZLocalizerType, out.centralZoneCZLocalizerType);

    return out;
  }
}
