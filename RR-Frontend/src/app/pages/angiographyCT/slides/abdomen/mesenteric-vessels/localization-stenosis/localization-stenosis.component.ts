import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { AnatomicVariantsOrPathologyTypeEnum, MesentericVesselsLocalizationTypeEnum, SeverityTypeEnum } from '@enums/angiographyCT/abdomen';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FormTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/form-type.enum';
import { nameof } from 'ts-simple-nameof';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-localization-stenosis',
  templateUrl: './localization-stenosis.component.html',
  styleUrls: ['./localization-stenosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationStenosisComponent implements OnInit, OnDestroy {
  @Input() model: AbdomenFindingUiModel;
  stenosisSeverityTypeOptions: DropdownModel[];
  subscriptions: Subscription[] = [];
  mesentericVesselsLocalizationType = MesentericVesselsLocalizationTypeEnum;
  stenosisSeverityType = SeverityTypeEnum;
  formType = FormTypeEnum;
  anatomicVariantsOrPathologyType = AnatomicVariantsOrPathologyTypeEnum;
  constructor(
    private translateService: TranslateService,
    private toastMessageService: ToastMessageService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('angiographyCT.abdomen.w025Expression.options').subscribe((out: DropdownModel[]) => {
        this.stenosisSeverityTypeOptions = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  resetisHemodynamicallyRelevant(): void {
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
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }
}
