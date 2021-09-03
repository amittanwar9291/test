import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { PancreasFindingApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-finding-api.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class PancreasFindingMapper implements IMapper<PancreasFindingApiModel, PancreasFindingUiModel> {
  constructor(
    private monthYearMapper: MonthYearMapper,
    private sliderMapper: SliderMapper,
    private referencePictureMapper: ReferencePictureMapper
  ) {
    automapper.createMap('PancreasFinding_AbdomenMRT_ApiModel', 'PancreasFinding_AbdomenMRT_UiModel').convertToType(PancreasFindingUiModel);
    automapper
      .createMap('PancreasFinding_AbdomenMRT_UiModel', 'PancreasFinding_AbdomenMRT_ApiModel')
      .convertToType(PancreasFindingApiModel);
  }

  mapToAPI(source: PancreasFindingUiModel, out: PancreasFindingApiModel): PancreasFindingApiModel {
    out = automapper.map('PancreasFinding_AbdomenMRT_UiModel', 'PancreasFinding_AbdomenMRT_ApiModel', source);

    out.monthOfOperation = this.monthYearMapper.mapToApi(source.dateOfOperation);
    out.yearOfOperation = source.dateOfOperation.year;

    out.signalT1wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT1wFSType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wFSType);
    out.signalT2wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: PancreasFindingApiModel, out: PancreasFindingUiModel): PancreasFindingUiModel {
    out = automapper.map('PancreasFinding_AbdomenMRT_ApiModel', 'PancreasFinding_AbdomenMRT_UiModel', source);

    out.dateOfOperation.month = source.monthOfOperation;
    out.dateOfOperation.year = source.yearOfOperation;

    out.signalT1wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT1wFSType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wFSType);
    out.signalT2wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
