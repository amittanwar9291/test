import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CardioScoresService } from '@services/cardioMRT/cardio-scores.service';

import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';

import { EscScoreType, UnitTypeEnum } from '@enums/cardioMRT';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

@Component({
  selector: 'rr-cardiovascular-risk-tab',
  templateUrl: './cardiovascular-risk-tab.component.html',
  styleUrls: ['./../anamnesis.component.scss', './cardiovascular-risk-tab.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CardiovascularRiskTabComponent {
  @Input() model: AnamnesisUiModel;
  @Input() age: number;
  @Input() gender: GenderTypeEnum;

  unitType: typeof UnitTypeEnum;
  previousUnitType: UnitTypeEnum;

  @Input() numberInputValidationModelNames: string;

  constructor(private cardioScoresService: CardioScoresService) {
    this.unitType = UnitTypeEnum;
  }

  clearInputsRelatedToUnit(): void {
    if (this.previousUnitType !== this.model.unitType) {
      this.model.totalCholesterolAmount = null;
      this.model.hdlCholesterolAmount = null;
      this.model.ldlCholesterolAmount = null;
      this.model.triglyceridesAmount = null;
      this.model.escScore = null;
      this.model.procamScore = null;
    }

    this.previousUnitType = this.model.unitType;
  }

  calculateEscScore(): void {
    if (!this.model.isEscScore) {
      this.model.escScore = null;
      this.cardioScoresService.setEscScoreType(this.model);
      return;
    }

    this.model.escScore = this.cardioScoresService.calculateEscScore(this.model, this.age, this.gender);
    this.cardioScoresService.setEscScoreType(this.model);
  }

  get escScoreResultText(): string {
    const basicTranslationPath = 'cardioMRT.anamnesis.escScoreResults.';

    if (this.model.escScoreType === EscScoreType.None || !this.model.isEscScore) {
      return `${basicTranslationPath}none`;
    }
    if (this.model.escScoreType === EscScoreType.LowRisk) {
      return `${basicTranslationPath}lowRisk`;
    }
    if (this.model.escScoreType === EscScoreType.MediumRisk) {
      return `${basicTranslationPath}mediumRisk`;
    }
    if (this.model.escScoreType === EscScoreType.HighRisk) {
      return `${basicTranslationPath}highRisk`;
    }
    if (this.model.escScoreType === EscScoreType.VeryHighRisk) {
      return `${basicTranslationPath}veryHighRisk`;
    }
  }

  calculateProcamScore(): void {
    if (!this.model.isProcamScore) {
      this.model.procamScore = null;
      return;
    }
    this.model.procamScore = this.cardioScoresService.calculateProcamScore(this.model, this.age);
  }
}
