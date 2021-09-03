import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { IDictionary } from '@interfaces/dictionary.interface';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';
import { KneeBonesFindingApiModel } from '@models/kneeMRT/api/bones/knee-bones-finding-api.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

const SIGNAL_ARRAY = ['None', 'Hypo', 'LowHypo', 'Iso', 'LowHyper', 'Hyper'];

@Injectable({
  providedIn: 'root'
})
export class KneeBonesFindingMapper implements IMapper<KneeBonesFindingApiModel, KneeBonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('KneeBonesFinding_KneeMRT_ApiModel', 'KneeBonesFinding_KneeMRT_UiModel').convertToType(KneeBonesFindingUiModel);
    automapper.createMap('KneeBonesFinding_KneeMRT_UiModel', 'KneeBonesFinding_KneeMRT_ApiModel').convertToType(KneeBonesFindingApiModel);
  }

  mapToAPI(source: KneeBonesFindingUiModel, out: KneeBonesFindingApiModel): KneeBonesFindingApiModel {
    out = automapper.map('KneeBonesFinding_KneeMRT_UiModel', 'KneeBonesFinding_KneeMRT_ApiModel', source);

    out.kneeLocation = this.enumMapper.mapToString(source.kneeLocation);
    out.kneeExtensionLocation = this.enumMapper.mapToString(source.kneeExtensionLocation);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: KneeBonesFindingApiModel, out: KneeBonesFindingUiModel): KneeBonesFindingUiModel {
    out = automapper.map('KneeBonesFinding_KneeMRT_ApiModel', 'KneeBonesFinding_KneeMRT_UiModel', source);

    this.enumMapper.mapToObject(source.kneeLocation, out.kneeLocation);
    this.enumMapper.mapToObject(source.kneeExtensionLocation, out.kneeExtensionLocation);

    out.signalT1w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT2w);

    return out;
  }

  private mapSignalToApi(input: number): string {
    const mapArray = ['None', 'Hyper', 'LowHyper', 'Iso', 'LowHypo', 'Hypo'];
    if (input < 0 || input > mapArray.length) {
      throw new Error('todo');
    }

    return mapArray[input];
  }

  private mapSignalToUi(input: string): number {
    const mapDict: IDictionary<number> = {
      None: 0,
      Hyper: 1,
      LowHyper: 2,
      Iso: 3,
      LowHypo: 4,
      Hypo: 5
    };

    return mapDict[input];
  }
}
