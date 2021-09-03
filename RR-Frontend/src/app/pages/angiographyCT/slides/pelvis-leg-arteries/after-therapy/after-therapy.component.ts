import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PelvisLegArteriesHelperService } from '../pelvis-leg-arteries-helper.service';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  AfterTherapyTypeEnum,
  AnastomoticAneurysmTypeEnum,
  BypassTypeEnum,
  CourseTypeEnum,
  DissectionTypeEnum,
  DistalBypassPortTypeEnum,
  NoStenosisTypeEnum,
  PeriprostheticFluidCollectionTypeEnum,
  WithoutContrastEnhancementTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/after-therapy';
import { LocalizationTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';

@Component({
  selector: 'rr-after-therapy',
  templateUrl: './after-therapy.component.html',
  styleUrls: ['./after-therapy.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AfterTherapyComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;
  isCMYes: boolean;
  sideTypeEnum = SideTypeEnum;
  afterTherapyTypeEnum = AfterTherapyTypeEnum;
  bypassTypeEnum = BypassTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;
  distalBypassPortType = DistalBypassPortTypeEnum;
  courseTypeEnum = CourseTypeEnum;
  noStenosisTypeEnum = NoStenosisTypeEnum;
  anastomoticAneurysmTypeEnum = AnastomoticAneurysmTypeEnum;
  periprostheticFluidCollectionTypeEnum = PeriprostheticFluidCollectionTypeEnum;
  withoutContrastEnhancementTypeEnum = WithoutContrastEnhancementTypeEnum;
  dissectionTypeEnum = DissectionTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW029: DropdownModel[];
  ddlW030: DropdownModel[];

  constructor(
    private translateService: TranslateService,
    private pelvisLegArteriesHelperService: PelvisLegArteriesHelperService,
    private validationHelperService: ValidationHelperService
  ) {
    this.subscriptions.push(
      pelvisLegArteriesHelperService.isCMYes.subscribe(value => {
        this.isCMYes = value;
      })
    );
  }

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
      this.translateService.stream('angiographyCT.pelvisLegArteries.W029.options').subscribe((out: DropdownModel[]) => {
        this.ddlW029 = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translateService.stream('angiographyCT.pelvisLegArteries.W030.options').subscribe((out: DropdownModel[]) => {
        this.ddlW030 = Object.values(out);
      })
    );
  }
  resetCrossover() {
    this.model.isCrossover = false;
  }
  resetDistalBypassPort() {
    this.model.isCrossover = false;
    this.model.distalBypassPortType = DistalBypassPortTypeEnum.None;
  }
  resetStentStenose() {
    if (this.model.noStenosisType === NoStenosisTypeEnum.InStentStenosis) {
      this.model.noStenosisType = NoStenosisTypeEnum.None;
    }
  }
  checkAndUpdateSideType() {
    this.model.isInfrarenal = false;
    this.model.isSuprarenal = false;
    if (this.isSideTypeDisabled()) {
      this.model.sideType = SideTypeEnum.None;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.sideType));
    }
  }

  isSideTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.afterTherapyLocalizationType);
  }
}
