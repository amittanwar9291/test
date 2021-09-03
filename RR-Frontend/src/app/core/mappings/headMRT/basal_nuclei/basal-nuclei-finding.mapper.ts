import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { BasalNucleiFindingApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-finding-api.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY, THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiFindingMapper implements IMapper<BasalNucleiFindingApiModel, BasalNucleiFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('Basal_Nuclei_Finding_HeadMRT_UiModel', 'Basal_Nuclei_Finding_HeadMRT_ApiModel')
      .convertToType(BasalNucleiFindingApiModel);
    automapper
      .createMap('Basal_Nuclei_Finding_HeadMRT_ApiModel', 'Basal_Nuclei_Finding_HeadMRT_UiModel')
      .convertToType(BasalNucleiFindingUiModel);
  }

  mapToAPI(source: BasalNucleiFindingUiModel, out: BasalNucleiFindingApiModel): BasalNucleiFindingApiModel {
    out = automapper.map('Basal_Nuclei_Finding_HeadMRT_UiModel', 'Basal_Nuclei_Finding_HeadMRT_ApiModel', source);

    out.basalGangliaLocations = this.enumMapper.mapToString(source.basalGangliaLocations);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);
    out.adcSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.adcSignalType);

    return out;
  }

  mapToUI(source: BasalNucleiFindingApiModel, out: BasalNucleiFindingUiModel): BasalNucleiFindingUiModel {
    out = automapper.map('Basal_Nuclei_Finding_HeadMRT_ApiModel', 'Basal_Nuclei_Finding_HeadMRT_UiModel', source);

    this.enumMapper.mapToObject(source.basalGangliaLocations, out.basalGangliaLocations);

    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);
    out.adcSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.adcSignalType);

    return out;
  }
}
