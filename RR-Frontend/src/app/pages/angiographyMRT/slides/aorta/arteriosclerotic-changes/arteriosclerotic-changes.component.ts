import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { AortaHelperService } from '../aorta-helper.service';
import { SeverityTypeEnum } from '@enums/angiographyMRT/aorta/severity-type.enum';
import { FormTypeEnum } from '@enums/angiographyMRT/aorta/form-type.enum';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

@Component({
  selector: 'rr-arteriosclerotic-changes',
  templateUrl: './arteriosclerotic-changes.component.html',
  styleUrls: ['./arteriosclerotic-changes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArterioscleroticChangesComponent {
  @Input() model: AortaFindingUiModel;

  severityTypeEnum = SeverityTypeEnum;
  formTypeEnum = FormTypeEnum;

  severityTypeSelection: SeverityTypeEnum;

  constructor(
    private aortaHelperService: AortaHelperService,
    private validationHelperService: ValidationHelperService,
    private toastMessageService: ToastMessageService
  ) {}

  checkSeverityType(value) {
    if (value === this.severityTypeSelection) {
      return;
    }
    this.severityTypeSelection = value;
    this.model.isHemodynamicallyRelevant = false;
  }

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

  openLargeLocalizer(): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({
      isLocalizationReentry: false,
      isSingleChoice: true
    });
  }
}
