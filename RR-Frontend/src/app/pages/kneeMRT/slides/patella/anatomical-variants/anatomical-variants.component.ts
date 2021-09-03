import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';

import {
  AdditionalOssificationTypeEnum,
  InsallSalvatiIndexTypeEnum,
  TrochleaDysplasiaTypeEnum,
  TtTgDistanceTypeEnum,
  VerticalPositionTypeEnum,
  VisualSelectionTypeEnum
} from '@enums/kneeMRT/patella/anatomical-variants';

@Component({
  selector: 'rr-anatomical-variants',
  templateUrl: './anatomical-variants.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class AnatomicalVariantsComponent {
  @Input() model: PatellaFindingUiModel;

  additionalOssificationType: typeof AdditionalOssificationTypeEnum;
  insallSalvatiIndexType: typeof InsallSalvatiIndexTypeEnum;
  trochleaDysplasiaType: typeof TrochleaDysplasiaTypeEnum;
  ttTgDistanceType: typeof TtTgDistanceTypeEnum;
  verticalPositionType: typeof VerticalPositionTypeEnum;
  visualSelectionType: typeof VisualSelectionTypeEnum;

  constructor() {
    this.additionalOssificationType = AdditionalOssificationTypeEnum;
    this.insallSalvatiIndexType = InsallSalvatiIndexTypeEnum;
    this.trochleaDysplasiaType = TrochleaDysplasiaTypeEnum;
    this.ttTgDistanceType = TtTgDistanceTypeEnum;
    this.verticalPositionType = VerticalPositionTypeEnum;
    this.visualSelectionType = VisualSelectionTypeEnum;
  }

  changeInsallSavatiIndex(): void {
    if (this.model.largestVerticalExpansionPatella && this.model.lengthPatellae) {
      this.model.insallSalvatiIndex = Number((this.model.largestVerticalExpansionPatella / this.model.lengthPatellae).toFixed(1));

      if (this.model.insallSalvatiIndex < 0.8) {
        this.model.insallSalvatiIndexType = InsallSalvatiIndexTypeEnum.PatellaAlta;
      } else if (this.model.insallSalvatiIndex <= 1.2) {
        this.model.insallSalvatiIndexType = InsallSalvatiIndexTypeEnum.NoPathologicalFinding;
      } else {
        this.model.insallSalvatiIndexType = InsallSalvatiIndexTypeEnum.PatellaBaja;
      }

      return;
    }

    this.model.insallSalvatiIndex = null;
    this.model.insallSalvatiIndexType = InsallSalvatiIndexTypeEnum.None;
  }

  checkSulcusAngleTrochleaValue(): void {
    if (this.model.sulcusAngleTrochleaInDegrees > 145) {
      this.model.isTrochleaDysplasia = true;
      return;
    }
    this.model.isTrochleaDysplasia = false;
  }

  checkTtTgDistanceValue(): void {
    const value = this.model.ttTgDistanceInMm;

    if (value) {
      if (value >= 0 && value < 15) {
        this.model.ttTgDistanceType = TtTgDistanceTypeEnum.Normal;
        return;
      }
      if (value >= 15 && value <= 20) {
        this.model.ttTgDistanceType = TtTgDistanceTypeEnum.Borderline;
        return;
      }
      if (value > 20 && value < 10000) {
        this.model.ttTgDistanceType = TtTgDistanceTypeEnum.Abnormal;
        return;
      }
    }
    this.model.ttTgDistanceType = TtTgDistanceTypeEnum.None;
  }
}
