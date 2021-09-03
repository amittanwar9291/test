import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormTypeEnum, LocalizationTypeEnum, SeverityTypeEnum } from '@enums/angiographyMRT/pelvis-leg-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ChronicLesionsTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';

@Component({
  selector: 'rr-vascular-stenosis',
  templateUrl: './vascular-stenosis.component.html',
  styleUrls: ['./vascular-stenosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularStenosisComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;

  locationTypeEnum = LocationTypeEnum;
  severityTypeEnum = SeverityTypeEnum;
  formTypeEnum = FormTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW019: DropdownModel[];

  constructor(
    private translateService: TranslateService,
    private toastMessageService: ToastMessageService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('angiographyMRT.pelvisLegArteries.W019.options').subscribe((out: DropdownModel[]) => {
        this.ddlW019 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearIsHemodynamicallyRelevant(value: SeverityTypeEnum): string {
    return this.model.severityType !== value ? 'isHemodynamicallyRelevant-block' : '';
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

  checkAndUpdateSideType() {
    if (this.isSideTypeDisabled()) {
      this.model.sideType = LocationTypeEnum.None;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.sideType));
    }
  }

  isSideTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.localizationType);
  }
}
