import { Component, Input } from '@angular/core';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-dyssynergic-defecation-anism',
  templateUrl: './dyssynergic-defecation-anism.component.html',
  styleUrls: ['./dyssynergic-defecation-anism.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DyssynergicDefecationAnismComponent {
  @Input() model: PelvicFloorFindingUiModel;

  setNumberValues() {
    if (!this.model.anorectalAngleAtRestInDegrees) {
      this.resetAngleAtRest();
      return;
    }

    if (!this.model.anorectalAngleWhilePressingInDegrees) {
      this.resetAnorectalPressing();
    }

    this.calculateAnorectalPressing();
    this.calculateAnorectalDefecation();
  }

  resetAngleAtRest() {
    this.model.reductionOfTheAnorectalAngleDuringPressing = null;
    this.model.openingOfTheAnorectalAngleAtDefecation = null;

    this.model.anorectalAngleDuringDefecationInDegrees = null;
    this.model.anorectalAngleWhilePressingInDegrees = null;
  }

  calculateAnorectalPressing() {
    if (this.model.anorectalAngleWhilePressingInDegrees) {
      this.model.reductionOfTheAnorectalAngleDuringPressing = Math.abs(
        this.model.anorectalAngleWhilePressingInDegrees - this.model.anorectalAngleAtRestInDegrees
      );
    } else {
      this.model.reductionOfTheAnorectalAngleDuringPressing = null;
    }
  }

  calculateAnorectalDefecation() {
    if (this.model.anorectalAngleDuringDefecationInDegrees) {
      this.model.openingOfTheAnorectalAngleAtDefecation = Math.abs(
        this.model.anorectalAngleDuringDefecationInDegrees - this.model.anorectalAngleAtRestInDegrees
      );
    } else {
      this.model.openingOfTheAnorectalAngleAtDefecation = null;
    }
  }

  resetAnorectalPressing() {
    this.model.reductionOfTheAnorectalAngleDuringPressing = null;
    this.model.openingOfTheAnorectalAngleAtDefecation = null;

    this.model.anorectalAngleDuringDefecationInDegrees = null;
  }
}
