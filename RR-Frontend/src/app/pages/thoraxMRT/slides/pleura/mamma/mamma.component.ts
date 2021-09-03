import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxMRT/pleura/common/contrast-enhancement-quantitative-type.enum';
import { FocalSignalVoidsTypeEnum } from '@enums/thoraxMRT/pleura/common/focal-signal-voids-type.enum';
import { PleuraDiagnosisTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-diagnosis-type.enum';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { VolumeTypeEnum } from '@enums/thoraxMRT/pleura/mamma/volume-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BreastLocation } from '@models/shared/mamma/breast/breast-location.model';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { PleuraHelperService } from '../pleura-helper.service';

@Component({
  selector: 'rr-mamma',
  templateUrl: './mamma.component.html',
  styleUrls: ['./mamma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MammaComponent implements OnInit, OnDestroy {
  @Input() model: PleuraFindingUiModel;
  @Input() isDWISelected: boolean;

  volumeTypeEnum = VolumeTypeEnum;
  siteTypeEnum = PleuraSiteTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  pleuraDiagnosisTypeEnum = PleuraDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  limitationTypeOptions: DropdownModel[];
  ddlW027: DropdownModel[];
  ddlW028: DropdownModel[];
  ddlW029: DropdownModel[];
  ddlW030: DropdownModel[];
  isCMYes: boolean;

  constructor(
    private translateService: TranslateService,
    private pleuraHelperService: PleuraHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.initTranslations();

    this.subscriptions.push(this.pleuraHelperService.isCMYes.subscribe(v => (this.isCMYes = v)));
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W027.options').subscribe((out: DropdownModel[]) => {
        this.ddlW027 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W028.options').subscribe((out: DropdownModel[]) => {
        this.ddlW028 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W029.options').subscribe((out: DropdownModel[]) => {
        this.ddlW029 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W030.options').subscribe((out: DropdownModel[]) => {
        this.ddlW030 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  clearThickenedBreastLocation() {
    this.model.thickenedCutisBreastLocation = new BreastLocation();
    this.validationHelperService.removeError('thickenedCutisBreastLocation');
  }

  clearMassBreastLocation() {
    this.model.massBreastLocation = new BreastLocation();
    this.validationHelperService.removeError('massBreastLocation');
  }

  clearSuspicionCheckbox() {
    this.model.isSuspicionOf = false;
  }

  clearFocalSignalType() {
    this.model.mammaFocalSignalVoidsType = FocalSignalVoidsTypeEnum.None;
  }
}
