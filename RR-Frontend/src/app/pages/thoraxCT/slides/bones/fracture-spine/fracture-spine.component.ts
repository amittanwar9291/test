import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CompressionInjuryTypeEnum } from '@enums/thoraxCT/bones/compression-injury-type.enum';
import { TensionBandInjuryTypeEnum } from '@enums/thoraxCT/bones/tension-band-injury-type.enum';
import { FractureOfSpineTypeEnum } from '@enums/thoraxCT/bones/fracture-of-spine-type.enum';
import { PathologyTypeEnum } from '@enums/thoraxCT/bones/pathology-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact, isNull, isUndefined } from 'lodash';

import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { BonesHelperService, largeLocalizers } from '../bones-helper.service';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

@Component({
  selector: 'rr-fracture-spine',
  templateUrl: './fracture-spine.component.html',
  styleUrls: ['./fracture-spine.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureSpineComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  isLargeLocalizerOpenedSubscription: Subscription;

  fractureOfSpineTypeEnum = FractureOfSpineTypeEnum;
  compressionInjuryTypeEnum = CompressionInjuryTypeEnum;
  tensionBandInjuryTypeEnum = TensionBandInjuryTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  spineSelectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.isLargeLocalizerOpenedSubscription = this.bonesHelperService.isLargeLocalizerOpened.subscribe(() => {
      this.checkAndClear();
    });
  }

  checkAndClear() {
    const currentLocalizerSelection = this.enumMapper.mapToString(this.model.vertebralColumnLocalization);
    if (
      isUndefined(this.bonesHelperService.previousSpineLocalizerSelection) ||
      isNull(this.bonesHelperService.previousSpineLocalizerSelection) ||
      this.bonesHelperService.previousSpineLocalizerSelection === currentLocalizerSelection
    ) {
      return;
    }
    this.model.isAcute = false;
    this.model.isOlderRemodeled = false;
    this.model.fractureOfSpineType = this.fractureOfSpineTypeEnum.None;
    this.model.compressionInjuryType = this.compressionInjuryTypeEnum.None;
    this.model.tensionBandInjuryType = this.tensionBandInjuryTypeEnum.None;
    this.model.pathologyType = this.pathologyTypeEnum.None;
    this.model.isFractureOlderRemodeled = false;
    this.model.isSchmorlNodes = false;
    this.model.isEndplateHerniation = false;

    if (compact(Object.values(this.model.vertebralColumnLocalization)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.vertebralColumnLocalization));
    }
  }

  ngOnDestroy(): void {
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }

  openLargeLocalizer(): void {
    this.bonesHelperService.previousSpineLocalizerSelection = this.enumMapper.mapToString(this.model.vertebralColumnLocalization);
    this.bonesHelperService.isLargeLocalizerOpened.next(largeLocalizers.SPINE);
  }

  getLabelBeginning(): string {
    return this.model.vertebralColumnLocalization.c7 ? '51' : this.model.vertebralColumnLocalization.l1 ? '53' : '52';
  }

  isLocalizerSelectionMade() {
    return this.enumMapper.mapToString(this.model.vertebralColumnLocalization) !== 'None';
  }

  isLocalizerSingleSelectionMade() {
    return this.isLocalizerSelectionMade() && compact(Object.values(this.model.vertebralColumnLocalization)).length === 1;
  }

  isLocalizerMultipleSelectionMade() {
    return this.isLocalizerSelectionMade() && compact(Object.values(this.model.vertebralColumnLocalization)).length >= 2;
  }
}
