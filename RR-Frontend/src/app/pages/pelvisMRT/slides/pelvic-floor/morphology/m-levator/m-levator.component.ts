import { Component, Input } from '@angular/core';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-m-levator',
  templateUrl: './m-levator.component.html',
  styleUrls: ['./m-levator.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MLevatorComponent {
  @Input() model: PelvicFloorFindingUiModel;
}
