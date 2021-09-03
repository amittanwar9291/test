import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

@Component({
  selector: 'rr-segmental-bowel-characterization-two',
  templateUrl: './segmental-bowel-characterization-two.component.html',
  styleUrls: ['./segmental-bowel-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SegmentalBowelCharacterizationTwoComponent {
  @Input() model: GastrointestinalTractFindingUiModel;

  resetInput() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    } else if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
