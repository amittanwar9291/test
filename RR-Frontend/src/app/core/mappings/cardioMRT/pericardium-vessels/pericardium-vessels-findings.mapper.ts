import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { PericardiumVesselsFindingApiModel } from '@models/cardioMRT/api/pericardium-vessels/pericardium-vessels-finding-api.model';
import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PericardiumVesselsFindingMapper implements IMapper<PericardiumVesselsFindingApiModel, PericardiumVesselsFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private enumMapper: EnumMapper) {
    automapper
      .createMap('PericardiumVesselsFinding_CardioMRT_ApiModel', 'PericardiumVesselsFinding_CardioMRT_UiModel')
      .convertToType(PericardiumVesselsFindingUiModel)
      .forSourceMember('signalT1w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('signalT2w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('lungLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('PericardiumVesselsFinding_CardioMRT_UiModel', 'PericardiumVesselsFinding_CardioMRT_ApiModel')
      .convertToType(PericardiumVesselsFindingApiModel)
      .forSourceMember('signalT1w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('signalT2w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('lungLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PericardiumVesselsFindingUiModel, out: PericardiumVesselsFindingApiModel): PericardiumVesselsFindingApiModel {
    out = automapper.map('PericardiumVesselsFinding_CardioMRT_UiModel', 'PericardiumVesselsFinding_CardioMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);
    out.lungLocalizer = this.enumMapper.mapToString(source.lungLocalizer);

    return out;
  }

  mapToUI(source: PericardiumVesselsFindingApiModel, out: PericardiumVesselsFindingUiModel): PericardiumVesselsFindingUiModel {
    out = automapper.map('PericardiumVesselsFinding_CardioMRT_ApiModel', 'PericardiumVesselsFinding_CardioMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);
    this.enumMapper.mapToObject(source.lungLocalizer, out.lungLocalizer);

    return out;
  }
}
