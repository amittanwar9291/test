import { Component, Input, OnInit } from '@angular/core';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  AnatomicVariantsOrPathologyTypeEnum,
  CharacterizationTypeEnum,
  DetailsTypeEnum,
  PearlLikeChangesTypeEnum,
  RenalArteryLocalizationTypeEnum,
  StatusTypeEnum
} from '@enums/angiographyCT/abdomen';
import { SeverityTypeEnum } from '@enums/angiographyCT';
import { FormTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/form-type.enum';
import { ShapeTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/shape-type.enum';
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

  sideType = SideTypeEnum;
  anatomicVariantsOrPathologyType = AnatomicVariantsOrPathologyTypeEnum;
  detailsType = DetailsTypeEnum;
  renalArteryLocalizationType = RenalArteryLocalizationTypeEnum;
  severityType = SeverityTypeEnum;
  formType = FormTypeEnum;
  statusType = StatusTypeEnum;
  pearlLikeChangesType = PearlLikeChangesTypeEnum;
  shapeType = ShapeTypeEnum;
  characterizationType = CharacterizationTypeEnum;

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
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }
}
