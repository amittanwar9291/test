import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { EvaluationFractureTypeEnum } from '@enums/kneeMRT/bones';
import { FibulaFractureDetailsTypeEnum } from '@enums/kneeMRT/bones/fibula-proximal/fibula-fracture-details-type.enum';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

@Component({
  selector: 'rr-fibula-proximal',
  templateUrl: './fibula-proximal.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FibulaProximalComponent {
  @Input() model: KneeBonesFindingUiModel;

  evaluationFractureType: typeof EvaluationFractureTypeEnum;
  fibulaFractureDetailsType: typeof FibulaFractureDetailsTypeEnum;
  previousEvaluationFractureType: EvaluationFractureTypeEnum;

  constructor() {
    this.evaluationFractureType = EvaluationFractureTypeEnum;
    this.fibulaFractureDetailsType = FibulaFractureDetailsTypeEnum;
  }

  clearFibulaFractureDetailsType(): void {
    if (this.previousEvaluationFractureType !== this.model.evaluationFractureType) {
      this.model.fibulaFractureDetailsType = FibulaFractureDetailsTypeEnum.None;
    }

    this.previousEvaluationFractureType = this.model.evaluationFractureType;
  }

  isfibulaFractureDetailsTypeDisabled(): boolean {
    return (
      this.model.evaluationFractureType === this.evaluationFractureType.None ||
      this.model.evaluationFractureType === this.evaluationFractureType.FractureOlderConsolidated ||
      this.model.evaluationFractureType === this.evaluationFractureType.SuspicionOf
    );
  }
}
