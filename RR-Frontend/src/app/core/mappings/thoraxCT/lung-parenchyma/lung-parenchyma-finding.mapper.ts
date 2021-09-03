import { Injectable } from '@angular/core';

import { LungParenchymaFindingApiModel } from '@models/thoraxCT/api/lung-parenchyma/lung-parenchyma-finding-api.model';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaFindingMapper implements IMapper<LungParenchymaFindingApiModel, LungParenchymaFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('LungParenchymaFinding_ThoraxCT_ApiModel', 'LungParenchymaFinding_ThoraxCT_UiModel')
      .convertToType(LungParenchymaFindingUiModel);
    automapper
      .createMap('LungParenchymaFinding_ThoraxCT_UiModel', 'LungParenchymaFinding_ThoraxCT_ApiModel')
      .convertToType(LungParenchymaFindingApiModel);
  }

  mapToAPI(source: LungParenchymaFindingUiModel, out: LungParenchymaFindingApiModel): LungParenchymaFindingApiModel {
    out = automapper.map('LungParenchymaFinding_ThoraxCT_UiModel', 'LungParenchymaFinding_ThoraxCT_ApiModel', source);

    out.mainCharacteristicsLungsSegmentsLocation = this.enumMapper.mapToString(source.mainCharacteristicsLungsSegmentsLocation);
    out.differentialDiagnosisLungsSegmentsLocation = this.enumMapper.mapToString(source.differentialDiagnosisLungsSegmentsLocation);
    out.mainCharacteristicsLungsFlapsLocation = this.enumMapper.mapToString(source.mainCharacteristicsLungsFlapsLocation);
    out.differentialDiagnosisLungsFlapsLocation = this.enumMapper.mapToString(source.differentialDiagnosisLungsFlapsLocation);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: LungParenchymaFindingApiModel, out: LungParenchymaFindingUiModel): LungParenchymaFindingUiModel {
    out = automapper.map('LungParenchymaFinding_ThoraxCT_ApiModel', 'LungParenchymaFinding_ThoraxCT_UiModel', source);

    this.enumMapper.mapToObject(source.mainCharacteristicsLungsSegmentsLocation, out.mainCharacteristicsLungsSegmentsLocation);
    this.enumMapper.mapToObject(source.differentialDiagnosisLungsSegmentsLocation, out.differentialDiagnosisLungsSegmentsLocation);
    this.enumMapper.mapToObject(source.mainCharacteristicsLungsFlapsLocation, out.mainCharacteristicsLungsFlapsLocation);
    this.enumMapper.mapToObject(source.differentialDiagnosisLungsFlapsLocation, out.differentialDiagnosisLungsFlapsLocation);
    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );
    return out;
  }
}
