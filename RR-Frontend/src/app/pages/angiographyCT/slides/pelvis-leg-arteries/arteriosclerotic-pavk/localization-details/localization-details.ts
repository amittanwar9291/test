import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { LengthTypeEnum, SegmentTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { LocalizationTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { SeverityTypeEnum } from '@enums/shared/angiography/severity-type.enum';

@Component({
  selector: 'rr-localization-details',
  templateUrl: './localization-details.html',
  styleUrls: ['./localization-details.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationDetailsComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;
  sideTypeEnum = SideTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;
  formTypeEnum = FormTypeEnum;
  segmentTypeEnum = SegmentTypeEnum;
  lengthTypeEnum = LengthTypeEnum;
  severityTypeEnum = SeverityTypeEnum;
  distalRefillingLocalizationTypeEnum = LocalizationTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW028: DropdownModel[];
  ddlW025: DropdownModel[];

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
      this.translateService.stream('angiographyCT.pelvisLegArteries.W028.options').subscribe((out: DropdownModel[]) => {
        this.ddlW028 = out;
      })
    );
    this.subscriptions.push(
      this.translateService.stream('angiographyCT.pelvisLegArteries.W025.options').subscribe((out: DropdownModel[]) => {
        this.ddlW025 = out;
      })
    );
  }

  calculate() {
    const A = this.model.diameterDiseaseFreePoststenoticSegment;
    const B = this.model.diameterStenosis;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisAccordingToNASCET = baseCalculation;
        this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
      } else {
        this.model.degreeOfStenosisAccordingToNASCET = null;
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCET = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }

  checkAndUpdateSideType() {
    this.model.isInfrarenal = false;
    this.model.isSuprarenal = false;
    this.model.isRight = false;
    this.model.isLeft = false;
    if (this.isSideTypeDisabled()) {
      this.model.sideType = SideTypeEnum.None;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.sideType));
      this.model.segmentType = SegmentTypeEnum.None;
    }
  }
  resetHemodynamically() {
    this.model.isHemodynamicallyRelevant = false;
  }

  isSideTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.localizationType);
  }
  isSeverityTypeDisabled(): boolean {
    return [SeverityTypeEnum.CompleteOcclusion, SeverityTypeEnum.None].includes(this.model.arterioscleroticPAVKSeverityType);
  }

  isSegmentTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.localizationType);
  }
}
