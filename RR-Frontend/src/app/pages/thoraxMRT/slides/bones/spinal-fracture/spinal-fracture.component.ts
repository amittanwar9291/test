import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { Subscription } from 'rxjs';
import { NotFutherSpecfiedTypeEnum } from '@enums/thoraxMRT/bones/fracture/not-futher-specfied-type.enum';
import { PathologyNoFractureTypeEnum } from '@enums/thoraxMRT/bones/spinal-fracture/pathology-no-fracture-type.enum';
import { BonesHelperService, ThoraxMRTBonesSpineLocalizerConfig } from '../bones-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { FractureAgeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-age.enum';
import { nameof } from 'ts-simple-nameof';
import { compact } from 'lodash';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';
import { FractureSubTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-sub-type.enum';

@Component({
  selector: 'rr-spinal-fracture',
  templateUrl: './spinal-fracture.component.html',
  styleUrls: ['./spinal-fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpinalFractureComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  spineLicalizerOpenSubscription: Subscription;
  spineSelectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  fractureAgeEnum = FractureAgeEnum;
  fractureTypeEnum = FractureTypeEnum;
  fractureSubTypeEnum = FractureSubTypeEnum;
  notFutherSpecfiedTypeEnum = NotFutherSpecfiedTypeEnum;
  pathologyNoFractureTypeEnum = PathologyNoFractureTypeEnum;

  fractureTypeSiblingsValues = {
    compressionInjuryTypeContainer: [
      FractureSubTypeEnum.MinorNonStructuralFractureA0,
      FractureSubTypeEnum.SingleEndplateA1,
      FractureSubTypeEnum.CoronalSplitA2,
      FractureSubTypeEnum.BurstFractureIncompleteA3,
      FractureSubTypeEnum.BurstFractureCompleteA4
    ],
    tensionBandInjuryTypeContainer: [
      FractureSubTypeEnum.MonosegmentalOsseousFailureB1,
      FractureSubTypeEnum.DisruptionOfPostTensionBandB2,
      FractureSubTypeEnum.DestructionOfTheIntervertebralDiscB3
    ]
  };

  isCervical = (selection): boolean => ['c3', 'c4', 'c5', 'c6', 'c7'].includes(selection);
  isThoracal = (selection): boolean =>
    ['tH1', 'tH2', 'tH3', 'tH4', 'tH5', 'tH6', 'tH7', 'tH8', 'tH9', 'tH10', 'tH11', 'tH12'].includes(selection)
  isLumbar = (selection): boolean => ['l1', 'l2', 'l3', 'l4', 'l5'].includes(selection);

  constructor(private bonesHelperService: BonesHelperService, private validationHelperService: ValidationHelperService) {}

  ngOnInit(): void {
    this.spineLicalizerOpenSubscription = this.bonesHelperService.spineLocalizerConfig.subscribe(() => {
      this.onLargeLocalizerClose();
    });
  }

  ngOnDestroy() {
    this.spineLicalizerOpenSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.spineLocalizerConfig.next(
      new ThoraxMRTBonesSpineLocalizerConfig(
        SpineLocationLogicTypeEnum.VertebreEach,
        SpineSelectionAccessibilityModeEnum.C3toL5,
        'thoraxMRT.bones.selectAffectedVertebralBodyMultipleSelection.value'
      )
    );
  }

  onLargeLocalizerClose() {
    if (!this.isLocalizerMultiSelection()) {
      this.model.fractureAge = FractureAgeEnum.None;
    }
    if (!this.isLocalizerSingleSelection()) {
      this.model.fractureType = FractureTypeEnum.None;
      this.model.fractureSubType = FractureSubTypeEnum.None;
      this.model.notFutherSpecfiedType = NotFutherSpecfiedTypeEnum.None;
      this.model.pathologyNoFractureType = PathologyNoFractureTypeEnum.None;
      this.model.isSchmorlNodes = false;
      this.model.isEndplateHerniation = false;
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.fractureType));
    }
    if (this.isLocalizerMultiSelection() || this.isLocalizerSingleSelection()) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocalization));
    }
  }

  isLocalizerSingleSelection() {
    return compact(Object.values(this.model.spineLocalization)).length === 1;
  }

  isLocalizerMultiSelection() {
    return compact(Object.values(this.model.spineLocalization)).length > 1;
  }

  getSpinePartNumberForLabel() {
    if (compact(Object.values(this.model.spineLocalization)).length === 1) {
      const selection = Object.keys(this.model.spineLocalization).find(key => this.model.spineLocalization[key]);
      return this.isCervical(selection) ? 51 : this.isThoracal(selection) ? 52 : 53;
    } else {
      return 'XX';
    }
  }

  getLabelPartBaseOnSelectedVertreba(): string {
    if (compact(Object.values(this.model.spineLocalization)).length === 1) {
      const selection = Object.keys(this.model.spineLocalization).find(key => this.model.spineLocalization[key]);
      const sideValue = this.isCervical(selection) ? 51 : this.isThoracal(selection) ? 52 : 53;
      const vertrebaNumber =
        this.isCervical(selection) || this.isLumbar(selection)
          ? selection.slice(1, selection.length + 1)
          : selection.slice(2, selection.length + 1);
      return sideValue + '.' + vertrebaNumber;
    } else {
      return 'XX.Y';
    }
  }

  resetSiblingsChildren(sibling: string) {
    if (this.fractureTypeSiblingsValues[sibling].includes(this.model.fractureSubType)) {
      this.model.fractureSubType = FractureSubTypeEnum.None;
    }
    this.model.notFutherSpecfiedType = NotFutherSpecfiedTypeEnum.None;
    this.model.pathologyNoFractureType = PathologyNoFractureTypeEnum.None;
    this.model.isSchmorlNodes = false;
    this.model.isEndplateHerniation = false;
  }
}
