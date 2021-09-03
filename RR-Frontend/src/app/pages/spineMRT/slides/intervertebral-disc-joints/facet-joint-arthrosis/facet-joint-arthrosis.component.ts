import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { IntervertebralDiscJointsHelperService } from '../intervertebral-disc-joints-helper.service';
import { NerveRootAffectionTypesEnum, SpinalCanalStenosisTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { Subscription } from 'rxjs';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { IntervertebralDiscJointsLargeLocalizerConfig } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-large-localizer-config.model';

@Component({
  selector: 'rr-facet-joint-arthrosis',
  templateUrl: './facet-joint-arthrosis.component.html',
  styleUrls: ['./facet-joint-arthrosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FacetJointArthrosisComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;

  spinalCanalStenosisTypesEnum = SpinalCanalStenosisTypesEnum;
  nerveRootAffectionTypesEnum = NerveRootAffectionTypesEnum;

  largeLocalizerOpenedSubscription: Subscription;

  localizerSingleSelection = false;

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService,
    private validationHelperService: ValidationHelperService,
    private spineHelperService: SpineHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerOpenedSubscription = this.intervertebralDiscJointsHelperService.largeLocalizerOpened.subscribe(() =>
      this.checkLocalizerSelection()
    );
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  openLocalizer() {
    this.intervertebralDiscJointsHelperService.largeLocalizerOpened.next(
      new IntervertebralDiscJointsLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEachIntervertebre,
        'spineMRT.disc.selectIntervertebralDiscOfSegmentMultiple.value'
      )
    );
  }

  private checkLocalizerSelection() {
    const currentSelection = compact(Object.values(this.model.spineLocation));
    this.localizerSingleSelection = currentSelection.length === 3;
    if (!this.localizerSingleSelection) {
      this.clearFirstColumn();
      this.validationHelperService.removeError(
        nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isFacetJointArthrosisLocalizationRight)
      );
      this.validationHelperService.removeError(
        nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isFacetJointArthrosisLocalizationLeft)
      );
      this.checkOneSideSelection();
    }
    if (currentSelection.length > 0) {
      this.validationHelperService.removeError(nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation));
    }
  }

  isLocalizerSingleSelection() {
    return compact(Object.values(this.model.spineLocation)).length === 3;
  }

  isOneSideSelected() {
    const bothSidesSelected = this.model.isFacetJointArthrosisLocalizationRight && this.model.isFacetJointArthrosisLocalizationLeft;
    const noSelection = !this.model.isFacetJointArthrosisLocalizationRight && !this.model.isFacetJointArthrosisLocalizationLeft;
    return !(bothSidesSelected || noSelection);
  }

  checkOneSideSelection() {
    if (this.isOneSideSelected) {
      this.clearThirdForthColumn();
      this.validationHelperService.removeError(nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystRight));
      this.validationHelperService.removeError(nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystLeft));
    }
  }

  private clearFirstColumn() {
    this.model.isFacetJointArthrosisLocalizationRight = false;
    this.model.isFacetJointArthrosisLocalizationLeft = false;
  }

  private clearThirdForthColumn() {
    this.model.isHypertrophy = false;
    this.model.isJointEffusion = false;
    this.model.isBoneMarrowEdema = false;
    this.model.isSynovialCyst = false;
    this.model.isSynovialCystRight = false;
    this.model.isSynovialCystLeft = false;
    this.model.maxDiameter = null;
    this.model.spinalCanalStenosisType = this.spinalCanalStenosisTypesEnum.None;
    this.model.widthOfTheSpinalCanalInMm = null;
    this.model.isForaminalStenosis = false;
    this.model.nerveRootAffectionType = this.nerveRootAffectionTypesEnum.None;
  }

  ngOnDestroy() {
    this.largeLocalizerOpenedSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }
}
