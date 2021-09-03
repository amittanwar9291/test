import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MeningesFindingApiModel } from '@models/headMRT/api/meninges/meninges-finding-api.model';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY, THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { MeningesFindingTypeEnum } from '@enums/headMRT/meninges';

@Injectable({
  providedIn: 'root'
})
export class MeningesFindingMapper implements IMapper<MeningesFindingApiModel, MeningesFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('MeningesFinding_HeadMRT_ApiModel', 'MeningesFinding_HeadMRT_UiModel').convertToType(MeningesFindingUiModel);
    automapper.createMap('MeningesFinding_HeadMRT_UiModel', 'MeningesFinding_HeadMRT_ApiModel').convertToType(MeningesFindingApiModel);
  }

  mapToAPI(source: MeningesFindingUiModel, out: MeningesFindingApiModel): MeningesFindingApiModel {
    out = automapper.map('MeningesFinding_HeadMRT_UiModel', 'MeningesFinding_HeadMRT_ApiModel', source);

    out.t1WSignalDiffuse = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1WSignalDiffuse);
    out.t2WSignalDiffuse = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2WSignalDiffuse);
    out.t1WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    out.dwiSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignal);
    out.adcSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.adcSignal);
    return out;
  }

  mapToUI(source: MeningesFindingApiModel, out: MeningesFindingUiModel): MeningesFindingUiModel {
    out = automapper.map('MeningesFinding_HeadMRT_ApiModel', 'MeningesFinding_HeadMRT_UiModel', source);

    out.t1WSignalDiffuse = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1WSignalDiffuse);
    out.t2WSignalDiffuse = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2WSignalDiffuse);
    out.t1WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    out.dwiSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignal);
    out.adcSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.adcSignal);

    return out;
  }
}
