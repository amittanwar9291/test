import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueFindingApiModel } from '@models/feetMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { Injectable } from '@angular/core';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

const SIGNAL_ARRAY = ['None', 'Hypo', 'Iso', 'Hyper'];

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingMapper implements IMapper<SoftTissueFindingApiModel, SoftTissueFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('SoftTissueFinding_FeetMRT_ApiModel', 'SoftTissueFinding_FeetMRT_UiModel').convertToType(SoftTissueFindingUiModel);
    automapper
      .createMap('SoftTissueFinding_FeetMRT_UiModel', 'SoftTissueFinding_FeetMRT_ApiModel')
      .convertToType(SoftTissueFindingApiModel);
  }

  mapToAPI(source: SoftTissueFindingUiModel, out: SoftTissueFindingApiModel): SoftTissueFindingApiModel {
    out = automapper.map('SoftTissueFinding_FeetMRT_UiModel', 'SoftTissueFinding_FeetMRT_ApiModel', source);
    out.threeDimensionalLocalization = this.enumMapper.mapToString(source.threeDimensionalLocalization);
    out.tendonsLocalization = this.enumMapper.mapToString(source.tendonsLocalization);
    out.signalT1w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: SoftTissueFindingApiModel, out: SoftTissueFindingUiModel): SoftTissueFindingUiModel {
    out = automapper.map('SoftTissueFinding_FeetMRT_ApiModel', 'SoftTissueFinding_FeetMRT_UiModel', source);
    this.enumMapper.mapToObject(source.threeDimensionalLocalization, out.threeDimensionalLocalization);
    this.enumMapper.mapToObject(source.tendonsLocalization, out.tendonsLocalization);
    out.signalT1w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT2w);

    return out;
  }
}
