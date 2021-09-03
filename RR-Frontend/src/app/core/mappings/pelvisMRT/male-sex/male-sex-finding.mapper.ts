import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MaleSexFindingApiModel } from '@models/pelvisMRT/api/male-sex/male-sex-finding-api.model';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class MaleSexFindingMapper implements IMapper<MaleSexFindingApiModel, MaleSexFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper.createMap('MaleSexFinding_PelvisMRT_ApiModel', 'MaleSexFinding_PelvisMRT_UiModel').convertToType(MaleSexFindingUiModel);
    automapper.createMap('MaleSexFinding_PelvisMRT_UiModel', 'MaleSexFinding_PelvisMRT_ApiModel').convertToType(MaleSexFindingApiModel);
  }

  mapToAPI(source: MaleSexFindingUiModel, out: MaleSexFindingApiModel): MaleSexFindingApiModel {
    out = automapper.map('MaleSexFinding_PelvisMRT_UiModel', 'MaleSexFinding_PelvisMRT_ApiModel', source);

    out.scrotumMassSignalT1wSliderType = this.sliderMapper.mapSignalToAPI(
      THREE_INPUT_ARRAY_REVERSED,
      source.scrotumMassSignalT1wSliderType
    );
    out.scrotumMassSignalT2wSliderType = this.sliderMapper.mapSignalToAPI(
      THREE_INPUT_ARRAY_REVERSED,
      source.scrotumMassSignalT2wSliderType
    );

    out.signalT1wSliderType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wSliderType);
    out.signalT2wSliderType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wSliderType);
    out.signalBehaviourT2wType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalBehaviourT2wType);
    out.seminalVesiclesMassSignalT2wSliderType = this.sliderMapper.mapSignalToAPI(
      THREE_INPUT_ARRAY_REVERSED,
      source.seminalVesiclesMassSignalT2wSliderType
    );

    out.epididymisSignalT2wSliderType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.epididymisSignalT2wSliderType);
    out.testiclesSignalT2wSliderType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.testiclesSignalT2wSliderType);

    out.surroundingSoftTissueSignalT2wSliderType = this.sliderMapper.mapSignalToAPI(
      THREE_INPUT_ARRAY_REVERSED,
      source.surroundingSoftTissueSignalT2wSliderType
    );
    out.surroundingSoftTissueSignalT1wSliderType = this.sliderMapper.mapSignalToAPI(
      THREE_INPUT_ARRAY_REVERSED,
      source.surroundingSoftTissueSignalT1wSliderType
    );

    return out;
  }

  mapToUI(source: MaleSexFindingApiModel, out: MaleSexFindingUiModel): MaleSexFindingUiModel {
    out = automapper.map('MaleSexFinding_PelvisMRT_ApiModel', 'MaleSexFinding_PelvisMRT_UiModel', source);

    out.scrotumMassSignalT1wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.scrotumMassSignalT1wSliderType);
    out.scrotumMassSignalT2wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.scrotumMassSignalT2wSliderType);

    out.signalT1wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wSliderType);
    out.signalT2wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wSliderType);
    out.signalBehaviourT2wType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalBehaviourT2wType);
    out.seminalVesiclesMassSignalT2wSliderType = this.sliderMapper.mapSignalToUI(
      THREE_INPUT_ARRAY_REVERSED,
      source.seminalVesiclesMassSignalT2wSliderType
    );

    out.epididymisSignalT2wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.epididymisSignalT2wSliderType);
    out.testiclesSignalT2wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.testiclesSignalT2wSliderType);

    out.surroundingSoftTissueSignalT2wSliderType = this.sliderMapper.mapSignalToUI(
      THREE_INPUT_ARRAY_REVERSED,
      source.surroundingSoftTissueSignalT2wSliderType
    );
    out.surroundingSoftTissueSignalT1wSliderType = this.sliderMapper.mapSignalToUI(
      THREE_INPUT_ARRAY_REVERSED,
      source.surroundingSoftTissueSignalT1wSliderType
    );

    return out;
  }
}
