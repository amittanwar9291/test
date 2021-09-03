import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AnatomicVariantsOrPathologyType,
  CharacterizationType,
  FormType,
  SeverityType,
  ShapeType,
  SideType
} from '@enums/angiographyMRT/abdomen/common';
import { DetailsType, PearlLikeChangesType, RenalArteryLocalizationType, StatusType } from '@enums/angiographyMRT/abdomen/renal-artery';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-renal-artery',
  templateUrl: './renal-artery.component.html',
  styleUrls: ['./renal-artery.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RenalArteryComponent {
  @Input() model: AbdomenFindingUiModel;

  sideType = SideType;
  anatomicVariantsOrPathologyType = AnatomicVariantsOrPathologyType;
  detailsType = DetailsType;
  renalArteryLocalizationType = RenalArteryLocalizationType;
  severityType = SeverityType;
  formType = FormType;
  pearlLikeChangesType = PearlLikeChangesType;
  shapeType = ShapeType;
  statusType = StatusType;
  characterizationType = CharacterizationType;

  constructor(private toastMessageService: ToastMessageService, private validationHelperService: ValidationHelperService) {}

  calculate() {
    const A = this.model.diameterNormalPoststenoticSegmentInMm;
    const B = this.model.diameterStenosisInMm;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisAccordingToNASCETInPercentage = baseCalculation;
        this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
      } else {
        this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
        this.toastMessageService.showErrorToast('errors.angiographyMRT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }
}
