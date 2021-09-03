import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';

@Component({
  selector: 'rr-urinary-bladder-trauma',
  templateUrl: './urinary-bladder-trauma.component.html',
  styleUrls: ['./urinary-bladder-trauma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UrinaryBladderTraumaComponent {
  @Input() model: BladderFindingUiModel;
}
