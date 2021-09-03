import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SeverityTypeEnum } from '@enums/angiographyCT';
import { AortaCharacterizationTypeEnum } from '@enums/angiographyCT/aorta/aorta-characterization-type.enum';
import { AortitisDifferentialDiagnosisTypeEnum } from '@enums/angiographyCT/aorta/aortitis/aortitis-differential-diagnosis-type.enum';
import { QuantificationAortitisTypeEnum } from '@enums/angiographyCT/aorta/aortitis/quantification-aortitis-type.enum';
import { FormTypeEnum } from '@enums/angiographyCT/aorta/form-type.enum';
import { ShapeTypeEnum } from '@enums/angiographyCT/aorta/shape-type.enum';
import { TypeTypeEnum } from '@enums/angiographyCT/aorta/type-type.enum';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AortaHelperService } from '../aorta-helper.service';

@Component({
  selector: 'rr-aortitis',
  templateUrl: './aortitis.component.html',
  styleUrls: ['./aortitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AortitisComponent implements OnDestroy {
  @Input() model: AortaFindingUiModel;
  isCmYes: boolean;
  localizationDetalisValidateElems = [nameof<AortaFindingUiModel>(m => m.aortaLocations1)];
  pathology1ValidateElems = [nameof<AortaFindingUiModel>(m => m.severityType)];
  pathology2ValidateElems = [nameof<AortaFindingUiModel>(m => m.aortitisMaxAxialDiameterInMm)];
  differentialDiagnosisDropdownValues: DropdownModel[];
  subscriptions: Subscription[] = [];

  quantificationAortitisTypeEnum = QuantificationAortitisTypeEnum;
  severityTypeEnum = SeverityTypeEnum;
  formTypeEnum = FormTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  typeTypeEnum = TypeTypeEnum;
  characterizationTypeEnum = AortaCharacterizationTypeEnum;
  aortitisDifferentialDiagnosisTypeEnum = AortitisDifferentialDiagnosisTypeEnum;
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

  openLargeLocalizer() {
    this.aortaHelperService.isLargeLocalizerOpened.next({
      isLocalizationReentry: false,
      isSingleChoice: false,
      isAdjacentChoice: true,
      isArcusAortaeDivided: true
    });
  }

  resetSeverityConnectedValues() {
    if (this.model.severityType === this.severityTypeSelection) {
      return;
    }
    this.severityTypeSelection = this.model.severityType;
    this.model.isHemodynamicallyRelevant = false;
  }

  resetSuspicionOf() {
    this.model.isSuspicionOf = false;
  }

  resetMycoticAneurysm() {
    this.model.isMycoticAneurysm = false;
  }

  calculate() {
    const A = this.model.aortitisDiameterNormalPoststenoticSegmentInMm;
    const B = this.model.aortitisDiameterStenosisInMm;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.aortitisNASCETInPercent = baseCalculation;
        this.validationHelperService.removeError(nameof<AortaFindingUiModel>(m => m.aortitisNASCETInPercent));
      } else {
        this.model.aortitisNASCETInPercent = null;
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.aortitisNASCETInPercent = null;
      this.validationHelperService.removeError(nameof<AortaFindingUiModel>(m => m.aortitisNASCETInPercent));
    }
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.W026.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisDropdownValues = out;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }
}
