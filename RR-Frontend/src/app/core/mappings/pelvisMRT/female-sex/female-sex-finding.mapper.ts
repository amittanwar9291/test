import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { FemaleSexFindingApiModel } from '@models/pelvisMRT/api/female-sex/female-sex-finding-api.model';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class FemaleSexFindingMapper implements IMapper<FemaleSexFindingApiModel, FemaleSexFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('FemaleSexFinding_PelvisMRT_ApiModel', 'FemaleSexFinding_PelvisMRT_UiModel')
      .convertToType(FemaleSexFindingUiModel);
    automapper
      .createMap('FemaleSexFinding_PelvisMRT_UiModel', 'FemaleSexFinding_PelvisMRT_ApiModel')
      .convertToType(FemaleSexFindingApiModel);
  }

  mapToAPI(source: FemaleSexFindingUiModel, out: FemaleSexFindingApiModel): FemaleSexFindingApiModel {
    out = automapper.map('FemaleSexFinding_PelvisMRT_UiModel', 'FemaleSexFinding_PelvisMRT_ApiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);
    out.additionalT1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.additionalT1wSignal);
    out.additionalT2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.additionalT2wSignal);
    out.uterusLocation = this.enumMapper.mapToString(source.uterusLocation);
    out.figoClassificationLocation1 = this.enumMapper.mapToString(source.figoClassificationLocation1);
    out.figoClassificationLocation2 = this.enumMapper.mapToString(source.figoClassificationLocation2);

    return out;
  }

  mapToUI(source: FemaleSexFindingApiModel, out: FemaleSexFindingUiModel): FemaleSexFindingUiModel {
    out = automapper.map('FemaleSexFinding_PelvisMRT_ApiModel', 'FemaleSexFinding_PelvisMRT_UiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);
    out.additionalT1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.additionalT1wSignal);
    out.additionalT2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.additionalT2wSignal);
    this.enumMapper.mapToObject(source.uterusLocation, out.uterusLocation);
    this.enumMapper.mapToObject(source.figoClassificationLocation1, out.figoClassificationLocation1);
    this.enumMapper.mapToObject(source.figoClassificationLocation2, out.figoClassificationLocation2);
    return out;
  }
}
