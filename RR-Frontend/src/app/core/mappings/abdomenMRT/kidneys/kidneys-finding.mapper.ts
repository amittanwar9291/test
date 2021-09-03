import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED, FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

import { KidneysFindingApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-finding-api.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class KidneysFindingMapper implements IMapper<KidneysFindingApiModel, KidneysFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('KidneysFinding_AbdomenMRT_UiModel', 'KidneysFinding_AbdomenMRT_ApiModel').convertToType(KidneysFindingApiModel);
    automapper.createMap('KidneysFinding_AbdomenMRT_ApiModel', 'KidneysFinding_AbdomenMRT_UiModel').convertToType(KidneysFindingUiModel);
  }

  mapToAPI(source: KidneysFindingUiModel, out: KidneysFindingApiModel): KidneysFindingApiModel {
    out = automapper.map('KidneysFinding_AbdomenMRT_UiModel', 'KidneysFinding_AbdomenMRT_ApiModel', source);

    out.renalCortexT1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.renalCortexT1wSignal);
    out.renalCortexT2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.renalCortexT2wSignal);
    out.kidneyMarrowT1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.kidneyMarrowT1wSignal);
    out.kidneyMarrowT2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.kidneyMarrowT2wSignal);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.corticomedullaryPhase = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.corticomedullaryPhase);
    out.nephrographicPhase = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.nephrographicPhase);
    out.excretoryPhase = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.excretoryPhase);
    out.renalInfarctionT1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.renalInfarctionT1wSignal);
    out.renalInfarctionT2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.renalInfarctionT2wSignal);

    out.normVariantOrAnomalySerialNumber = source.normVariantOrAnomalyReferencePicture.serialNumber;
    out.normVariantOrAnomalyPictureNumber = source.normVariantOrAnomalyReferencePicture.pictureNumber;
    out.normVariantOrAnomalyImageFile = this.referencePictureMapper.mapToAPI(source.normVariantOrAnomalyReferencePicture).uploadedImageFile;

    out.obstructiveNephropathyChar1SerialNumber = source.obstructiveNephropathyChar1ReferencePicture.serialNumber;
    out.obstructiveNephropathyChar1PictureNumber = source.obstructiveNephropathyChar1ReferencePicture.pictureNumber;
    out.obstructiveNephropathyChar1ImageFile = this.referencePictureMapper.mapToAPI(
      source.obstructiveNephropathyChar1ReferencePicture
    ).uploadedImageFile;

    out.obstructiveNephropathyChar2SerialNumber = source.obstructiveNephropathyChar2ReferencePicture.serialNumber;
    out.obstructiveNephropathyChar2PictureNumber = source.obstructiveNephropathyChar2ReferencePicture.pictureNumber;
    out.obstructiveNephropathyChar2ImageFile = this.referencePictureMapper.mapToAPI(
      source.obstructiveNephropathyChar2ReferencePicture
    ).uploadedImageFile;

    out.massSerialNumber = source.massReferencePicture.serialNumber;
    out.massPictureNumber = source.massReferencePicture.pictureNumber;
    out.massImageFile = this.referencePictureMapper.mapToAPI(source.massReferencePicture).uploadedImageFile;

    out.decreasedRenalVolumeSerialNumber = source.decreasedRenalVolumeReferencePicture.serialNumber;
    out.decreasedRenalVolumePictureNumber = source.decreasedRenalVolumeReferencePicture.pictureNumber;
    out.decreasedRenalVolumeImageFile = this.referencePictureMapper.mapToAPI(source.decreasedRenalVolumeReferencePicture).uploadedImageFile;

    out.increasedRenalVolumeSerialNumber = source.increasedRenalVolumeReferencePicture.serialNumber;
    out.increasedRenalVolumePictureNumber = source.increasedRenalVolumeReferencePicture.pictureNumber;
    out.increasedRenalVolumeImageFile = this.referencePictureMapper.mapToAPI(source.increasedRenalVolumeReferencePicture).uploadedImageFile;

    out.vascularNephropathySerialNumber = source.vascularNephropathyReferencePicture.serialNumber;
    out.vascularNephropathyPictureNumber = source.vascularNephropathyReferencePicture.pictureNumber;
    out.vascularNephropathyImageFile = this.referencePictureMapper.mapToAPI(source.vascularNephropathyReferencePicture).uploadedImageFile;

    return out;
  }

  mapToUI(source: KidneysFindingApiModel, out: KidneysFindingUiModel): KidneysFindingUiModel {
    out = automapper.map('KidneysFinding_AbdomenMRT_ApiModel', 'KidneysFinding_AbdomenMRT_UiModel', source);

    out.renalCortexT1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.renalCortexT1wSignal);
    out.renalCortexT2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.renalCortexT2wSignal);
    out.kidneyMarrowT1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.kidneyMarrowT1wSignal);
    out.kidneyMarrowT2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.kidneyMarrowT2wSignal);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.corticomedullaryPhase = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.corticomedullaryPhase);
    out.nephrographicPhase = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.nephrographicPhase);
    out.excretoryPhase = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.excretoryPhase);
    out.renalInfarctionT1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.renalInfarctionT1wSignal);
    out.renalInfarctionT2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.renalInfarctionT2wSignal);

    out.normVariantOrAnomalyReferencePicture.uploadedImageFile = source.normVariantOrAnomalyImageFile;
    out.normVariantOrAnomalyReferencePicture.serialNumber = source.normVariantOrAnomalySerialNumber;
    out.normVariantOrAnomalyReferencePicture.pictureNumber = source.normVariantOrAnomalyPictureNumber;

    out.obstructiveNephropathyChar1ReferencePicture.uploadedImageFile = source.obstructiveNephropathyChar1ImageFile;
    out.obstructiveNephropathyChar1ReferencePicture.serialNumber = source.obstructiveNephropathyChar1SerialNumber;
    out.obstructiveNephropathyChar1ReferencePicture.pictureNumber = source.obstructiveNephropathyChar1PictureNumber;

    out.obstructiveNephropathyChar2ReferencePicture.uploadedImageFile = source.obstructiveNephropathyChar2ImageFile;
    out.obstructiveNephropathyChar2ReferencePicture.serialNumber = source.obstructiveNephropathyChar2SerialNumber;
    out.obstructiveNephropathyChar2ReferencePicture.pictureNumber = source.obstructiveNephropathyChar2PictureNumber;

    out.massReferencePicture.uploadedImageFile = source.massImageFile;
    out.massReferencePicture.serialNumber = source.massSerialNumber;
    out.massReferencePicture.pictureNumber = source.massPictureNumber;

    out.decreasedRenalVolumeReferencePicture.uploadedImageFile = source.decreasedRenalVolumeImageFile;
    out.decreasedRenalVolumeReferencePicture.serialNumber = source.decreasedRenalVolumeSerialNumber;
    out.decreasedRenalVolumeReferencePicture.pictureNumber = source.decreasedRenalVolumePictureNumber;

    out.increasedRenalVolumeReferencePicture.uploadedImageFile = source.increasedRenalVolumeImageFile;
    out.increasedRenalVolumeReferencePicture.serialNumber = source.increasedRenalVolumeSerialNumber;
    out.increasedRenalVolumeReferencePicture.pictureNumber = source.increasedRenalVolumePictureNumber;

    out.vascularNephropathyReferencePicture.uploadedImageFile = source.vascularNephropathyImageFile;
    out.vascularNephropathyReferencePicture.serialNumber = source.vascularNephropathySerialNumber;
    out.vascularNephropathyReferencePicture.pictureNumber = source.vascularNephropathyPictureNumber;

    return out;
  }
}
