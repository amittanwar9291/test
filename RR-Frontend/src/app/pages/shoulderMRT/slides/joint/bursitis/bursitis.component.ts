import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';

@Component({
  selector: 'rr-bursitis',
  templateUrl: './bursitis.component.html',
  styleUrls: ['./bursitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BursitisComponent {
  @Input() model: JointFindingUiModel;

  constructor() {}
}
