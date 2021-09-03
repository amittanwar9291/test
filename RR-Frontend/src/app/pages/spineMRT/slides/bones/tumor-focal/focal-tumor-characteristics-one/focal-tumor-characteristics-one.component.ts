import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ContrastEnhancementQuantitativeTypeEnum,
  CorticalisTypeEnum,
  HomogeneityTypeEnum,
  LimitationTypeEnum
} from '@enums/spineMRT/bones';
import { CmEnhancementFormTypeEnum } from '@enums/spineMRT/bones/tumor-focal/cm-enhancement-form-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { BonesHelperService } from '../../bones-helper.service';
import { nameof } from 'ts-simple-nameof';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';

@Component({
  selector: 'rr-focal-tumor-characteristics-one',
  templateUrl: './focal-tumor-characteristics-one.component.html',
  styleUrls: ['./focal-tumor-characteristics-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalTumorCharacteristicsOneComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() isCMYes: boolean;
  @Input() differentialDiagnosisOptions1: DropdownModel[];

  limitationTypeEnum = LimitationTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  corticalisTypeEnum = CorticalisTypeEnum;
  cmEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  cmEnhancementFormTypeEnum = CmEnhancementFormTypeEnum;

  largeLocalizerSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private bonesHelperService: BonesHelperService,
    private spineHelperService: SpineHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerSubscription = this.bonesHelperService.largeLocalizerOpenConfig.subscribe(value => {
      if (!value) {
        this.onLocalizerCloseChange();
      }
    });
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.largeLocalizerSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpenConfig.next(
      new SpineBonesLocalizerConfig(
        nameof<BonesFindingUiModel>(m => m.spineLocation),
        SpineLocationLogicTypeEnum.OneVertebre,
        'spineMRT.bones.selectVertebraSingle.value'
      )
    );
  }

  private onLocalizerCloseChange(): void {
    if (compact(Object.values(this.model.spineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation));
    } else {
      this.model.traumaLocation = new DiscGeneralLocationModel();
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.traumaLocation));
    }
  }

  isCmEnhancementQuantitativTypeNoneOrNo(): boolean {
    return [this.cmEnhancementQuantitativeTypeEnum.None, this.cmEnhancementQuantitativeTypeEnum.No].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }

  disabledDiagnosis(): boolean {
    return this.model.descriptionType !== 'IKnow';
  }

  disabledDiscLocalizer(): boolean {
    // filter true values from spine-complex-model
    const filteredSpineComplex = Object.keys(this.model.spineLocation).filter(item => this.model.spineLocation[item]);

    return filteredSpineComplex.length !== 1;
  }

  clearSubordinated(): void {
    this.model.isSecondary = false;
  }
}
