import { Component, Input } from '@angular/core';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-epidural-hematoma',
  templateUrl: './epidural-hematoma.component.html',
  styleUrls: ['./epidural-hematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EpiduralHematomaComponent {
  @Input() model: MeningesFindingUiModel;

  resetInput() {
    if (!this.model.size) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    } else if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }
}
