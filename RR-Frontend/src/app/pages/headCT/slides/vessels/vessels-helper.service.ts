import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HeadCTVesselsLocalizersTypeEnum } from '@enums/headCT/vessels/headCT-vessels-localizers-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { AppConfig } from '../../../../app.config';
import { FileService } from '@services/shared/file-service/file.service';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

@Injectable({
  providedIn: 'root'
})
export class VesselsHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
  openLocalizer = new BehaviorSubject<HeadCTVesselsLocalizersTypeEnum>(null);

  picturesTypeEnumToModelProp = {
    ImageFile: nameof<VesselsFindingUiModel>(m => m.referencePicture),
    Perfusion01ImageFile: nameof<VesselsFindingUiModel>(m => m.perfusion01ReferencePicture),
    Perfusion02ImageFile: nameof<VesselsFindingUiModel>(m => m.perfusion02ReferencePicture)
  };

  constructor(
    private fileService: FileService,
    private validationHelperService: ValidationHelperService,
    private toastMessageService: ToastMessageService
  ) {}

  public clearImage(model: VesselsFindingUiModel, imagesToRemoveReference: HeadCTPicturesTypeEnum) {
    const imagesToRemoveId: string = model[this.picturesTypeEnumToModelProp[imagesToRemoveReference]].imageFileId;
    if (imagesToRemoveId) {
      this.fileService.setRoute(`${AppConfig.settings.servicesUrls.headCT.vessels.fileUpload}`);
      return this.fileService.deleteMultiple([imagesToRemoveId]).then(() => {
        model[this.picturesTypeEnumToModelProp[imagesToRemoveReference]] = new ReferencePictureUiModel();
      });
    } else {
      model[this.picturesTypeEnumToModelProp[imagesToRemoveReference]] = new ReferencePictureUiModel();
    }
  }

  public calculateNASCET(model: VesselsFindingUiModel) {
    const A = model.diameterDiseaseFreePoststenoticSegmentInMm;
    const B = model.diameterStenosisInMm;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        model.degreeOfStenosisCalculatedInNASCETInPercentage = baseCalculation;
        this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCETInPercentage));
      } else {
        model.degreeOfStenosisCalculatedInNASCETInPercentage = null;
        this.toastMessageService.showErrorToast('errors.angiographyMRT.nascetCalculation', null);
      }
    } else {
      model.degreeOfStenosisCalculatedInNASCETInPercentage = null;
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCETInPercentage));
    }
  }
}
