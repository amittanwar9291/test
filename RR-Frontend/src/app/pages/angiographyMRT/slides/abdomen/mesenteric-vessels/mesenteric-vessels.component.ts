import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnatomicVariantsOrPathologyType, CharacterizationType, FormType, ShapeType } from '@enums/angiographyMRT/abdomen/common';
import { SeverityType } from '@enums/angiographyMRT/abdomen/common/severity-type.enum';
import {
  ArisesFromCeliacTrunkType,
  DirectOriginFromTheAbdominalAortaType,
  FurtherVariantsType,
  HepatomesentericTrunkType,
  IncompleteHepatomesentericTrunkType,
  MesentericVesselsLocalizationType
} from '@enums/angiographyMRT/abdomen/mesenteric-vessels';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-mesenteric-vessels',
  templateUrl: './mesenteric-vessels.component.html',
  styleUrls: ['./mesenteric-vessels.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MesentericVesselsComponent {
  @Input() model: AbdomenFindingUiModel;

  anatomicVariantsOrPathologyType = AnatomicVariantsOrPathologyType;
  directOriginFromTheAbdominalAortaType = DirectOriginFromTheAbdominalAortaType;
  hepatomesentericTrunkType = HepatomesentericTrunkType;
  incompleteHepatomesentericTrunkType = IncompleteHepatomesentericTrunkType;
  arisesFromCeliacTrunkType = ArisesFromCeliacTrunkType;
  furtherVariantsType = FurtherVariantsType;
  mesentericVesselsLocalizationType = MesentericVesselsLocalizationType;
  severityType = SeverityType;
  formType = FormType;
  shapeType = ShapeType;
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

  resetIncompleteTrunkType() {
    this.model.incompleteHepatomesentericTrunkType = IncompleteHepatomesentericTrunkType.None;
  }

  disableHemodynamicallyRelevant(severityType: SeverityType): boolean {
    const shouldDisable = severityType === SeverityType.None || severityType === SeverityType.CompleteOcclusion ? true : false;
    if (shouldDisable) {
      this.model.isHemodynamicallyRelevant = false;
    }
    return shouldDisable;
  }
}
