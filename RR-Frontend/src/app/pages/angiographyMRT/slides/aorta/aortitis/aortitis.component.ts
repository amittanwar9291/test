import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { AortaHelperService } from '../aorta-helper.service';
import { QuantificationAortitisTypeEnum } from '@enums/angiographyMRT/aorta/quantification-aortitis-type.enum';
import { SeverityTypeEnum } from '@enums/angiographyMRT/aorta/severity-type.enum';
import { FormTypeEnum } from '@enums/angiographyMRT/aorta/form-type.enum';
import { VascularDilatationTypeEnum } from '@enums/angiographyMRT/aorta/vascular-dilatation-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

@Component({
  selector: 'rr-aortitis',
  templateUrl: './aortitis.component.html',
  styleUrls: ['./aortitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AortitisComponent implements OnDestroy {
  @Input() model: AortaFindingUiModel;
  isCmYes: boolean;
  localizationDetalisValidateElems = [nameof<AortaFindingUiModel>(m => m.aortaLocation)];
  pathologyValidateElems = [nameof<AortaFindingUiModel>(m => m.severityType)];
  differentialDiagnosisDropdownValues: DropdownModel[];
  subscriptions: Subscription[] = [];

  quantificationAortitisTypeEnum = QuantificationAortitisTypeEnum;
  severityTypeEnum = SeverityTypeEnum;
  formTypeEnum = FormTypeEnum;
  vascularDilatationTypeEnum = VascularDilatationTypeEnum;
  severityTypeSelection: SeverityTypeEnum;

  constructor(
    private translate: TranslateService,
    private aortaHelperService: AortaHelperService,
    private validationHelperService: ValidationHelperService,
    private toastMessageService: ToastMessageService
  ) {
    this.initTranslations();
    this.subscriptions.push(this.aortaHelperService.isCMYes.subscribe(v => (this.isCmYes = v)));
  }

  openLargeLocalizer(): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({ isLocalizationReentry: false });
  }

  checkSeverityType() {
    if (this.model.severityType === this.severityTypeSelection) {
      return;
    }
    this.severityTypeSelection = this.model.severityType;
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

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.aorta.differentialDiagnosisDropdown.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisDropdownValues = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }
}
