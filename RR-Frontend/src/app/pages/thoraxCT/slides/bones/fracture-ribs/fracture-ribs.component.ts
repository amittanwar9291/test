import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnteriorEndSegmentTypeEnum } from '@enums/thoraxCT/bones/anterior-end-segment-type.enum';
import { PosteriorSegmentTypeEnum } from '@enums/thoraxCT/bones/posterior-segment-type.enum';
import { RibFractureTypeEnum } from '@enums/thoraxCT/bones/rib-fracture-type.enum';
import { ShankTypeEnum } from '@enums/thoraxCT/bones/shank-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact, isNull, isUndefined, startsWith } from 'lodash';

import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { BonesHelperService, largeLocalizers } from '../bones-helper.service';

@Component({
  selector: 'rr-fracture-ribs',
  templateUrl: './fracture-ribs.component.html',
  styleUrls: ['./fracture-ribs.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureRibsComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  ribFractureTypeEnum = RibFractureTypeEnum;
  posteriorSegmentTypeEnum = PosteriorSegmentTypeEnum;
  shankTypeEnum = ShankTypeEnum;
  anteriorEndSegmentTypeEnum = AnteriorEndSegmentTypeEnum;

  isLargeLocalizerOpenedSubscription: Subscription;

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.isLargeLocalizerOpenedSubscription = this.bonesHelperService.isLargeLocalizerOpened.subscribe(v => this.checkAndClear());
  }

  ngOnDestroy(): void {
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }

  openLargeLocalizer(): void {
    this.bonesHelperService.previousRibsLocalizerSelection = this.enumMapper.mapToString(this.model.ribLocation);
    this.bonesHelperService.isLargeLocalizerOpened.next(largeLocalizers.RIBS);
  }

  checkAndClear() {
    const currentLocalizerSelection = this.enumMapper.mapToString(this.model.ribLocation);
    if (
      isUndefined(this.bonesHelperService.previousRibsLocalizerSelection) ||
      isNull(this.bonesHelperService.previousRibsLocalizerSelection) ||
      this.bonesHelperService.previousRibsLocalizerSelection === currentLocalizerSelection
    ) {
      return;
    }
    this.model.isAcute = false;
    this.model.isOlderRemodeled = false;
    this.model.ribFractureType = this.ribFractureTypeEnum.None;
    this.model.posteriorSegmentType = this.posteriorSegmentTypeEnum.None;
    this.model.shankType = this.shankTypeEnum.None;
    this.model.anteriorEndSegmentType = this.anteriorEndSegmentTypeEnum.None;
    this.model.isFractureOlderRemodeled = false;

    if (compact(Object.values(this.model.ribLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.ribLocation));
    }
  }

  getLabel(): string {
    if (!this.isLocalizerSelectionMade() || this.isLocalizerMultipleSelectionMade()) {
      return 'x.xx';
    } else {
      const selected = this.enumMapper.mapToString(this.model.ribLocation);
      const side = startsWith(selected, 'Right') ? 1 : 2;
      const ribNumber = side === 1 ? Number(selected.slice(5, selected.length)) : Number(selected.slice(4, selected.length));
      return side + '.' + ribNumber;
    }
  }

  isLocalizerSelectionMade() {
    return this.enumMapper.mapToString(this.model.ribLocation) !== 'None';
  }

  isLocalizerSingleSelectionMade() {
    return this.isLocalizerSelectionMade() && compact(Object.values(this.model.ribLocation)).length === 1;
  }

  isLocalizerMultipleSelectionMade() {
    return this.isLocalizerSelectionMade() && compact(Object.values(this.model.ribLocation)).length >= 2;
  }
}
