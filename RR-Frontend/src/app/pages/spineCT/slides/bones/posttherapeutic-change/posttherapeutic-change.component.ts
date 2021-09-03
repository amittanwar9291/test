import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BonesLargeLocalizerConfig } from '@models/spineCT/ui/bones/bones-large-localizer-config.model';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { ComplicationsTypeEnum } from '@enums/spineCT/bones/posttherapeutic-change/complications-type.enum';
import { DetailsInterventionTypeEnum } from '@enums/spineCT/bones/posttherapeutic-change/details-Intervention-type.enum';
import { InterventionTypeEnum } from '@enums/spineCT/bones/posttherapeutic-change/intervention-type.enum';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesHelperService } from '../bones-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-spine-ct-posttherapeutic-change',
  templateUrl: './posttherapeutic-change.component.html',
  styleUrls: ['./posttherapeutic-change.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PosttherapeuticChangeComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  w025Values: DropdownModel[];
  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
  complicationsTypeEnum = ComplicationsTypeEnum;
  detailsInterventionTypeEnum = DetailsInterventionTypeEnum;
  interventionTypeEnum = InterventionTypeEnum;

  constructor(
    private translate: TranslateService,
    private spineHelperService: SpineCtHelperService,
    private bonesHelperService: BonesHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.initTranslations();
    this.subscriptions.push(
      this.spineHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v)),
      this.bonesHelperService.largeLocalizerConfig.subscribe(() => this.onLocalizerClosed())
    );
  }

  interventionSpineLocationsConditions() {
    if (
      this.model.interventionType !== this.interventionTypeEnum.None &&
      this.model.interventionType !== this.interventionTypeEnum.Spondylodesis &&
      this.model.interventionType !== this.interventionTypeEnum.IntervertebralDiscReplacement
    ) {
      return true;
    }
  }

  clearSecondColumn() {
    this.model.spondylodesisSpineLocations = new SpineLocation();
    this.model.interventionSpineLocations = new SpineLocation();
    this.model.intervertebralDiscReplacementSpineLocations = new SpineLocation();
    this.model.isSpineSideRight = false;
    this.model.isSpineSideLeft = false;
    this.model.detailsInterventionType = DetailsInterventionTypeEnum.None;
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spondylodesisSpineLocations));
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.interventionSpineLocations));
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.intervertebralDiscReplacementSpineLocations));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W025.options').subscribe((out: DropdownModel[]) => {
        this.w025Values = out;
      })
    );
  }

  openLargeLocalizer(selectedModel) {
    let localizerConfig: BonesLargeLocalizerConfig;

    switch (selectedModel) {
      case 'spondylodesisSpineLocations':
        localizerConfig = new BonesLargeLocalizerConfig(
          this.model.spondylodesisSpineLocations,
          SpineLocationLogicTypeEnum.VertebreRange,
          SpineSelectionAccessibilityModeEnum.C0toOsCoccygis,
          'spineCT.bones.localization.value',
          'spineCT.bones.spondylodesisSpineDescription.value'
        );
        break;
      case 'interventionSpineLocations':
        localizerConfig = new BonesLargeLocalizerConfig(
          this.model.interventionSpineLocations,
          SpineLocationLogicTypeEnum.VertebreEach,
          SpineSelectionAccessibilityModeEnum.C0toOsCoccygis,
          'spineCT.bones.localization.value',
          'spineCT.bones.interventionSpineDescription.value'
        );
        break;
      case 'intervertebralDiscReplacementSpineLocations':
        localizerConfig = new BonesLargeLocalizerConfig(
          this.model.intervertebralDiscReplacementSpineLocations,
          SpineLocationLogicTypeEnum.DiscEach,
          SpineSelectionAccessibilityModeEnum.C0toOsCoccygis,
          'spineCT.bones.localization.value',
          'spineCT.bones.intervertebralDiscReplacementSpineDescription.value'
        );
    }
    this.bonesHelperService.largeLocalizerConfig.next(localizerConfig);
  }

  onLocalizerClosed() {
    this.clearInterventionLocalizerDependentProperties();
    this.clearLocalizersValidationErrors();
  }

  clearInterventionLocalizerDependentProperties() {
    if (!this.isSingleSelctionOnInterventionLocalizer()) {
      if (this.model.interventionType === InterventionTypeEnum.Laminectomy) {
        this.model.isSpineSideRight = false;
        this.model.isSpineSideLeft = false;
      }
      if (this.model.interventionType === InterventionTypeEnum.BoneCementApplication) {
        this.model.detailsInterventionType = DetailsInterventionTypeEnum.None;
      }
    }
  }

  isSingleSelctionOnInterventionLocalizer(): boolean {
    return compact(Object.values(this.model.interventionSpineLocations)).length === 1;
  }

  clearLocalizersValidationErrors() {
    if (compact(Object.values(this.model.spondylodesisSpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spondylodesisSpineLocations));
    }
    if (compact(Object.values(this.model.interventionSpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.interventionSpineLocations));
    }
    if (compact(Object.values(this.model.intervertebralDiscReplacementSpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.intervertebralDiscReplacementSpineLocations));
    }
  }
}
