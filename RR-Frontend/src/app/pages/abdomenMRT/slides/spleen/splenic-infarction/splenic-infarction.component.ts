import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';

@Component({
  selector: 'rr-splenic-infarction',
  templateUrl: './splenic-infarction.component.html',
  styleUrls: ['./splenic-infarction.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SplenicInfarctionComponent {
  @Input() model: SpleenFindingUiModel;

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
