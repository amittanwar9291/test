import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormTypeEnum, LocalizationTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { SeverityTypeEnum } from '@enums/shared/angiography/severity-type.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

@Component({
  selector: 'rr-distal-refilling',
  templateUrl: './distal-refilling.component.html',
  styleUrls: ['./distal-refilling.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DistalRefillingComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;
  sideTypeEnum = SideTypeEnum;
  severityTypeEnum = SeverityTypeEnum;
  formTypeEnum = FormTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW028: DropdownModel[];

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
  }

  checkAndUpdateSideType() {
    this.model.isDistalRefillingInfrarenal = false;
    this.model.isDistalRefillingSuprarenal = false;
    this.model.isP1Segment = false;
    this.model.isP2Segment = false;
    this.model.isP3Segment = false;
    this.model.isRight = false;
    this.model.isLeft = false;
    if (this.isSideTypeDisabled()) {
      this.model.sideType = SideTypeEnum.None;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.sideType));
    }
  }

  isSideTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.localizationType);
  }

  isDistalRefillingSideDisplayed(): boolean {
    return (
      (this.model.localizationType === LocalizationTypeEnum.AbdominalAorta ||
        this.model.localizationType === LocalizationTypeEnum.Bifurcation) &&
      this.model.distalRefillingLocalizationType !== LocalizationTypeEnum.None &&
      this.model.distalRefillingLocalizationType !== LocalizationTypeEnum.AbdominalAorta &&
      this.model.distalRefillingLocalizationType !== LocalizationTypeEnum.Bifurcation
    );
  }
}
