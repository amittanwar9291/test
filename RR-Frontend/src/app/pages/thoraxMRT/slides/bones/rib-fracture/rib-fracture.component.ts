import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService } from '../bones-helper.service';
import { Subscription } from 'rxjs';
import { FractureAgeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-age.enum';
import { compact } from 'lodash';
import { NotFutherSpecfiedTypeEnum } from '@enums/thoraxMRT/bones/fracture/not-futher-specfied-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';
import { FractureSubTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-sub-type.enum';

@Component({
  selector: 'rr-rib-fracture',
  templateUrl: './rib-fracture.component.html',
  styleUrls: ['./rib-fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RibFractureComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  ribsLicalizerOpenSubscription: Subscription;

  fractureAgeEnum = FractureAgeEnum;
  fractureTypeEnum = FractureTypeEnum;
  fractureSubTypeEnum = FractureSubTypeEnum;
  notFutherSpecfiedTypeEnum = NotFutherSpecfiedTypeEnum;

  fractureTypeSiblingsValues = {
    posteriorSegmentTypeContainer: [
      FractureSubTypeEnum.Extraarticular16_1A,
      FractureSubTypeEnum.PartialCostotransverseDisruption16_1B,
      FractureSubTypeEnum.CompleteCostotransverseDisruption16_1C
    ],
    shaftTypeContainer: [
      FractureSubTypeEnum.SimpleFracture16_2A,
      FractureSubTypeEnum.MultifragmentaryWedgeFracture16_2B,
      FractureSubTypeEnum.MultifragmentarySegmentalFracture16_2C
    ],
    anteriorEndSegmentTypeContainer: [
      FractureSubTypeEnum.SimpleFracture16_3A,
      FractureSubTypeEnum.WedgeFracture16_3B,
      FractureSubTypeEnum.MultifragmentaryFracture16_3C
    ]
  };

  constructor(private bonesHelperService: BonesHelperService, private validationHelperService: ValidationHelperService) {}

  ngOnInit(): void {
    this.ribsLicalizerOpenSubscription = this.bonesHelperService.ribsLocalizerConfig.subscribe(() => {
      this.onLargeLocalizerClose();
    });
  }

  ngOnDestroy() {
    this.ribsLicalizerOpenSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.ribsLocalizerConfig.next({ isSingleSelect: false, descriptionRrid: 'tho_m_070120' });
  }

  onLargeLocalizerClose() {
    if (!this.isLocalizerMultiSelection()) {
      this.model.fractureAge = FractureAgeEnum.None;
    }
    if (!this.isLocalizerSingleSelection()) {
      this.model.fractureType = FractureTypeEnum.None;
      this.model.fractureSubType = FractureSubTypeEnum.None;
      this.model.notFutherSpecfiedType = NotFutherSpecfiedTypeEnum.None;
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.fractureType));
    }
    if (this.isLocalizerMultiSelection() || this.isLocalizerSingleSelection()) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.ribLocalization));
    }
  }

  isLocalizerSingleSelection() {
    return compact(Object.values(this.model.ribLocalization)).length === 1;
  }

  isLocalizerMultiSelection() {
    return compact(Object.values(this.model.ribLocalization)).length > 1;
  }

  getLabelPartBaseOnSelectedRib(): string {
    if (compact(Object.values(this.model.ribLocalization)).length === 1) {
      const selection = Object.keys(this.model.ribLocalization).find(key => this.model.ribLocalization[key]);
      const sideValue = selection.includes('right') ? '1' : '2';
      const ribNumber = selection.includes('right') ? selection.slice(5, selection.length + 1) : selection.slice(4, selection.length + 1);
      return sideValue + '.' + ribNumber;
    } else {
      return 'x.yy';
    }
  }

  resetSiblingsChildren(siblings: string[]) {
    siblings.forEach(item => {
      if (this.fractureTypeSiblingsValues[item].includes(this.model.fractureSubType)) {
        this.model.fractureSubType = FractureSubTypeEnum.None;
      }
    });
    this.model.notFutherSpecfiedType = NotFutherSpecfiedTypeEnum.None;
  }
}
