import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';

@Component({
  selector: 'rr-urinary-bladder-wall-thickening',
  templateUrl: './urinary-bladder-wall-thickening.component.html',
  styleUrls: ['./urinary-bladder-wall-thickening.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UrinaryBladderWallThickeningComponent {
  @Input() model: BladderFindingUiModel;
}
