import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import {
  CraniocaudalesLevelTypesEnum,
  ExpansionTypesEnum,
  FindingDetailTypesEnum,
  IntervertebralDiscJointsFindingTypesEnum,
  ModicClassificationTypesEnum,
  NerveRootAffectionTypesEnum,
  SpinalCanalStenosisTypesEnum,
  StenosisTypesEnum
} from '@enums/spineMRT/intervertebral-disc-joints';
import { IntervertebralDiscJointsHelperService } from '../intervertebral-disc-joints-helper.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { compact, omit } from 'lodash';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { discSelectionElements } from '@models/spineMRT/ui/intervertebral-disc-joints/discSelectionElements';
import { SpineDiscLocationModel } from '@models/shared/spine/localizers/spine-disc-location.model';
import { IntervertebralDiscJointsLargeLocalizerConfig } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-large-localizer-config.model';

@Component({
  selector: 'rr-protrusion-extrusion-migration-sequestration',
  templateUrl: './protrusion-extrusion-migration-sequestration.component.html',
  styleUrls: ['./protrusion-extrusion-migration-sequestration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProtrusionExtrusionMigrationSequestrationComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;

  intervertebralDiscJointsFindingTypesEnum = IntervertebralDiscJointsFindingTypesEnum;
  findingDetailTypesEnum = FindingDetailTypesEnum;
  modicClassificationTypesEnum = ModicClassificationTypesEnum;
  expansionTypesEnum = ExpansionTypesEnum;
  spinalCanalStenosisTypesEnum = SpinalCanalStenosisTypesEnum;
  nerveRootAffectionTypeEnum = NerveRootAffectionTypesEnum;
  stenosisTypesEnum = StenosisTypesEnum;
  craniocaudalesLevelTypesEnum = CraniocaudalesLevelTypesEnum;

  largeLocalizerSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;

  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService,
    private changeDetectidddonService: ChangeDetectionService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    private spineHelperService: SpineHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerSubscription = this.intervertebralDiscJointsHelperService.largeLocalizerOpened.subscribe(value => {
      if (!value) {
        this.onLocalizerCloseChange();
      }
    });
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  shouldBeDisplayByFindingType(findingType: IntervertebralDiscJointsFindingTypesEnum[]) {
    return findingType.includes(this.model.findingType);
  }

  is1or2or6Selected(): boolean {
    return this.model.discLocation.central || this.model.discLocation.paracentralRight || this.model.discLocation.paracentralLeft;
  }

  is3or4or5or7or8or9Selected(): boolean {
    const anySelection = this.enumMapper.mapToString(this.model.discLocation) !== 'None';
    return anySelection && !this.is1or2or6Selected();
  }

  openLocalizer() {
    this.intervertebralDiscJointsHelperService.largeLocalizerOpened.next(
      new IntervertebralDiscJointsLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEach,
        'spineMRT.disc.selectIntervertebralDiscMultiple.value'
      )
    );
  }

  getFilteredAndSortedSelectionList(): any[] {
    return compact(
      discSelectionElements.map(item => {
        return this.model.discLocation[item.name] ? item : null;
      })
    );
  }

  private onLocalizerCloseChange() {
    if (!this.isAnySelectionOnLocalizer() || !this.isSingleSelectionOnLocalizer()) {
      this.clearAllFindingData();
      this.clearAllFindingErrorsExceptLocalizer();
    } else {
      this.validationHelperService.removeError(nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation));
    }
    this.clearSpinalCanalStenosisType();
    this.clearSelectionDetails();
  }

  isLWS(): boolean {
    return (
      compact(['L1d', 'L2d', 'L3d', 'L4d', 'L5d'].map(part => this.enumMapper.mapToString(this.model.spineLocation).includes(part)))
        .length > 0
    );
  }

  isSingleSelectionOnLocalizer(): boolean {
    return compact(Object.values(this.model.spineLocation)).length === 1;
  }

  isAnySelectionOnLocalizer(): boolean {
    return compact(Object.values(this.model.spineLocation)).length !== 0;
  }

  ngOnDestroy() {
    this.largeLocalizerSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  getDiameterTranslation(): string {
    const type =
      this.model.findingType === this.intervertebralDiscJointsFindingTypesEnum.Migration ? 'diameterMigration' : 'diameterSequester';
    return 'spineMRT.disc.' + type + '.value';
  }

  isMigrationOrSequestration(): boolean {
    return [this.intervertebralDiscJointsFindingTypesEnum.Migration, this.intervertebralDiscJointsFindingTypesEnum.Sequestration].includes(
      this.model.findingType
    );
  }

  showAxialLocalization(): boolean {
    return this.isMigrationOrSequestration() ? true : this.model.findingDetailType === this.findingDetailTypesEnum.Localization;
  }

  private clearAllFindingData() {
    const omittedProperties = [nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation), ...findingBaseProperties];
    Object.assign(this.model, omit(new IntervertebralDiscJointsFindingUiModel(), omittedProperties));
  }

  private clearAllFindingErrorsExceptLocalizer() {
    Object.keys(this.model).forEach(modelProp => {
      if (modelProp !== nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation)) {
        this.validationHelperService.removeError(modelProp);
      }
    });
  }

  clearDiskSelection() {
    this.model.discLocation = new SpineDiscLocationModel();
    this.validationHelperService.removeError(nameof<IntervertebralDiscJointsFindingUiModel>(m => m.discLocation));
  }

  clearSelectionDetails() {
    if (this.model.findingDetailType === FindingDetailTypesEnum.Localization && !this.is1or2or6Selected()) {
      this.model.expansionType = this.expansionTypesEnum.None;
      this.model.spinalCanalStenosisType = this.spinalCanalStenosisTypesEnum.None;
      this.model.widthOfTheSpinalCanalInMm = null;
    }
    if (this.model.findingDetailType === FindingDetailTypesEnum.Localization && !this.is3or4or5or7or8or9Selected()) {
      this.model.nerveRootAffectionType = this.nerveRootAffectionTypeEnum.None;
      this.model.stenosisType = this.stenosisTypesEnum.None;
    }
  }

  private clearSpinalCanalStenosisType() {
    const isAllowForLWSValuesSelected = [this.spinalCanalStenosisTypesEnum.Relative, this.spinalCanalStenosisTypesEnum.Absolute].includes(
      this.model.spinalCanalStenosisType
    );
    if (!this.isLWS() && isAllowForLWSValuesSelected) {
      this.model.spinalCanalStenosisType = this.spinalCanalStenosisTypesEnum.None;
    }
  }

  checkAndClearMaxDiameter() {
    if (!this.model.isSynovialCystRight && !this.model.isSynovialCystLeft) {
      this.model.maxDiameter = null;
    }
  }
}
