import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { DiagnosisFindingApiModel } from '@models/mammaMRT/api/diagnosis/diagnosis-finding-api.model';
import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisFindingMapper implements IMapper<DiagnosisFindingApiModel, DiagnosisFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('DiagnosisFinding_MammaMRT_ApiModel', 'DiagnosisFinding_MammaMRT_UiModel')
      .convertToType(DiagnosisFindingUiModel)
      .forSourceMember('findingLocation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('signalT1w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('signalT2w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('DiagnosisFinding_MammaMRT_UiModel', 'DiagnosisFinding_MammaMRT_ApiModel')
      .convertToType(DiagnosisFindingApiModel)
      .forSourceMember('findingLocation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('signalT1w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('signalT2w', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: DiagnosisFindingUiModel, out: DiagnosisFindingApiModel): DiagnosisFindingApiModel {
    out = automapper.map('DiagnosisFinding_MammaMRT_UiModel', 'DiagnosisFinding_MammaMRT_ApiModel', source);

    out.findingLocation = this.enumMapper.mapToString(source.findingLocation);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: DiagnosisFindingApiModel, out: DiagnosisFindingUiModel): DiagnosisFindingUiModel {
    out = automapper.map('DiagnosisFinding_MammaMRT_ApiModel', 'DiagnosisFinding_MammaMRT_UiModel', source);

    this.enumMapper.mapToObject(source.findingLocation, out.findingLocation);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
