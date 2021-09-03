import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { CardioRelaxationTimeMapper } from '@mappings/cardioMRT/left-ventricle/cardio-relaxation-time.mapper';
import { CardioKineticDisorderMapper } from '@mappings/cardioMRT/left-ventricle/cardio-kinetic-disorder.mapper';
import { CardioPerfusionDefectMapper } from '@mappings/cardioMRT/left-ventricle/cardio-perfusion-defect.mapper';
import { CardioLGEMapper } from '@mappings/cardioMRT/left-ventricle/cardio-LGE.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

import { LeftVentricleApiModel } from '@models/cardioMRT/api/left-ventricle/left-ventricle-api.model';
import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';
import { CardioRelaxationTimeApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-relaxation-time-api.model';
import { CardioRelaxationTimeUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-relaxation-time-ui.model';
import { CardioKineticDisorderLocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-kinetic-disorder-localizer-api.model';
import { CardioKineticDisorderLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-kinetic-disorder-localizer-ui.model';
import { CardioPerfusionDefectLocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-perfusion-defect-localizer-api.model';
import { CardioLGELocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-LGE-localizer-api.model';
import { CardioLGELocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-LGE-localizer-ui.model';
import { CardioPerfusionDefectLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-perfusion-defect-localizer-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LeftVentricleMapper implements IMapper<LeftVentricleApiModel, LeftVentricleUiModel> {
  constructor(
    private enumMapper: EnumMapper,
    private relaxationTimeMapper: CardioRelaxationTimeMapper,
    private kineticDisorderMapper: CardioKineticDisorderMapper,
    private perfusionDefectMapper: CardioPerfusionDefectMapper,
    private lgeMapper: CardioLGEMapper,
    private referencePictureMapper: ReferencePictureMapper
  ) {
    automapper
      .createMap('LeftVentricle_CardioMRT_UiModel', 'LeftVentricle_CardioMRT_ApiModel')
      .convertToType(LeftVentricleApiModel)
      .forSourceMember('kineticDisorderLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('perfusionDefectLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('lgeSegmentalLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('t1Localizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('t2Localizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('t1GdLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());

    automapper
      .createMap('LeftVentricle_CardioMRT_ApiModel', 'LeftVentricle_CardioMRT_UiModel')
      .convertToType(LeftVentricleUiModel)
      .forSourceMember('kineticDisorderLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('perfusionDefectLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('lgeSegmentalLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('t1Localizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('t2Localizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('t1GdLocalizer', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: LeftVentricleUiModel, out: LeftVentricleApiModel): LeftVentricleApiModel {
    out = automapper.map('LeftVentricle_CardioMRT_UiModel', 'LeftVentricle_CardioMRT_ApiModel', source);

    out.myocardialEdemaLocalizer = this.enumMapper.mapToString(source.myocardialEdemaLocalizer);
    out.wallThickeningLocalizer = this.enumMapper.mapToString(source.wallThickeningLocalizer);
    out.wallThinningLocalizer = this.enumMapper.mapToString(source.wallThinningLocalizer);
    out.reducedMyocardialSignalT1wT2wLocalizer = this.enumMapper.mapToString(source.reducedMyocardialSignalT1wT2wLocalizer);

    out.kineticDisorderLocalizer = this.kineticDisorderMapper.mapToAPI(
      source.kineticDisorderLocalizer,
      new CardioKineticDisorderLocalizerApiModel()
    );
    out.perfusionDefectLocalizer = this.perfusionDefectMapper.mapToAPI(
      source.perfusionDefectLocalizer,
      new CardioPerfusionDefectLocalizerApiModel()
    );
    out.lgeSegmentalLocalizer = this.lgeMapper.mapToAPI(source.lgeSegmentalLocalizer, new CardioLGELocalizerApiModel());

    out.t1Localizer = this.relaxationTimeMapper.mapToAPI(source.t1Localizer, new CardioRelaxationTimeApiModel());
    out.t2Localizer = this.relaxationTimeMapper.mapToAPI(source.t2Localizer, new CardioRelaxationTimeApiModel());
    out.t1GdLocalizer = this.relaxationTimeMapper.mapToAPI(source.t1GdLocalizer, new CardioRelaxationTimeApiModel());

    const lgeReferencePictureMapped = this.referencePictureMapper.mapToAPI(source.lgeReferencePicture);
    const t1ReferencePictureMapped = this.referencePictureMapper.mapToAPI(source.t1ReferencePicture);
    const t2ReferencePictureMapped = this.referencePictureMapper.mapToAPI(source.t2ReferencePicture);
    const t1GdReferencePictureMapped = this.referencePictureMapper.mapToAPI(source.t1GdReferencePicture);

    out.lgeImageFile = lgeReferencePictureMapped.uploadedImageFile;
    out.lgeImageFileId = lgeReferencePictureMapped.imageFileId;
    out.lgePictureNumber = lgeReferencePictureMapped.pictureNumber;
    out.lgeSerialNumber = lgeReferencePictureMapped.serialNumber;

    out.t1ImageFile = t1ReferencePictureMapped.uploadedImageFile;
    out.t1ImageFileId = t1ReferencePictureMapped.imageFileId;
    out.t1PictureNumber = t1ReferencePictureMapped.pictureNumber;
    out.t1SerialNumber = t1ReferencePictureMapped.serialNumber;

    out.t2ImageFile = t2ReferencePictureMapped.uploadedImageFile;
    out.t2ImageFileId = t2ReferencePictureMapped.imageFileId;
    out.t2PictureNumber = t2ReferencePictureMapped.pictureNumber;
    out.t2SerialNumber = t2ReferencePictureMapped.serialNumber;

    out.t1GdImageFile = t1GdReferencePictureMapped.uploadedImageFile;
    out.t1GdImageFileId = t1GdReferencePictureMapped.imageFileId;
    out.t1GdPictureNumber = t1GdReferencePictureMapped.pictureNumber;
    out.t1GdSerialNumber = t1GdReferencePictureMapped.serialNumber;

    return out;
  }

  mapToUI(source: LeftVentricleApiModel, out: LeftVentricleUiModel): LeftVentricleUiModel {
    out = automapper.map('LeftVentricle_CardioMRT_ApiModel', 'LeftVentricle_CardioMRT_UiModel', source);

    this.enumMapper.mapToObject(source.myocardialEdemaLocalizer, out.myocardialEdemaLocalizer);
    this.enumMapper.mapToObject(source.wallThickeningLocalizer, out.wallThickeningLocalizer);
    this.enumMapper.mapToObject(source.wallThinningLocalizer, out.wallThinningLocalizer);
    this.enumMapper.mapToObject(source.reducedMyocardialSignalT1wT2wLocalizer, out.reducedMyocardialSignalT1wT2wLocalizer);

    out.kineticDisorderLocalizer = this.kineticDisorderMapper.mapToUI(
      source.kineticDisorderLocalizer,
      new CardioKineticDisorderLocalizerUiModel()
    );
    out.perfusionDefectLocalizer = this.perfusionDefectMapper.mapToUI(
      source.perfusionDefectLocalizer,
      new CardioPerfusionDefectLocalizerUiModel()
    );
    out.lgeSegmentalLocalizer = this.lgeMapper.mapToUI(source.lgeSegmentalLocalizer, new CardioLGELocalizerUiModel());

    out.t1Localizer = this.relaxationTimeMapper.mapToUI(source.t1Localizer, new CardioRelaxationTimeUiModel());
    out.t2Localizer = this.relaxationTimeMapper.mapToUI(source.t2Localizer, new CardioRelaxationTimeUiModel());
    out.t1GdLocalizer = this.relaxationTimeMapper.mapToUI(source.t1GdLocalizer, new CardioRelaxationTimeUiModel());

    out.lgeReferencePicture = this.referencePictureMapper.mapToUI(
      source.lgePictureNumber,
      source.lgeSerialNumber,
      source.lgeImageFile,
      source.lgeImageFileId
    );

    out.t1ReferencePicture = this.referencePictureMapper.mapToUI(
      source.t1PictureNumber,
      source.t1SerialNumber,
      source.t1ImageFile,
      source.t1ImageFileId
    );

    out.t2ReferencePicture = this.referencePictureMapper.mapToUI(
      source.t2PictureNumber,
      source.t2SerialNumber,
      source.t2ImageFile,
      source.t2ImageFileId
    );

    out.t1GdReferencePicture = this.referencePictureMapper.mapToUI(
      source.t1GdPictureNumber,
      source.t1GdSerialNumber,
      source.t1GdImageFile,
      source.t1GdImageFileId
    );

    return out;
  }
}
