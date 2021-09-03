import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormTypeEnum } from '@enums/angiographyCT/aorta/form-type.enum';
import { SeverityTypeEnum } from '@enums/angiographyCT/severity-type.enum';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AortaHelperService } from '../aorta-helper.service';
@Component({
  selector: 'rr-arteriosclerotic-changes',
  templateUrl: './arteriosclerotic-changes.component.html',
  styleUrls: ['./arteriosclerotic-changes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArterioscleroticChangesComponent implements OnInit, OnDestroy {
  @Input() model: AortaFindingUiModel;
  severityTypeOptions: DropdownModel[];
  subscriptions: Subscription[] = [];

  severityTypeEnum = SeverityTypeEnum;
  formTypeEnum = FormTypeEnum;

  severityTypeSelection: SeverityTypeEnum;

  constructor(
    private aortaHelperService: AortaHelperService,
    private validationHelperService: ValidationHelperService,
    private toastMessageService: ToastMessageService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  resetSeverityType() {
    if (this.model.severityType === this.severityTypeEnum.CompleteOcclusion || this.model.severityType === this.severityTypeEnum.None) {
      this.model.isHemodynamicallyRelevant = false;
    }
  }

  initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('angiographyCT.aorta.W017.options').subscribe((out: DropdownModel[]) => {
        this.severityTypeOptions = out;
      })
    );
  }

  calculate() {
    const A = this.model.diameterNormalPoststenoticSegmentInMm;
    const B = this.model.maxDiameterInMm;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisNASCETInPercent = baseCalculation;
        this.validationHelperService.removeError(nameof<AortaFindingUiModel>(m => m.degreeOfStenosisNASCETInPercent));
      } else {
        this.model.degreeOfStenosisNASCETInPercent = null;
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisNASCETInPercent = null;
      this.validationHelperService.removeError(nameof<AortaFindingUiModel>(m => m.degreeOfStenosisNASCETInPercent));
    }
  }

  openLargeLocalizer(): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({
      isLocalizationReentry: false
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
