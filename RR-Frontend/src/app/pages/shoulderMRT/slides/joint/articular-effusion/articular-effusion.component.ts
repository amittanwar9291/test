import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';
import { ArticularEffusionType } from '@enums/shoulderMRT/joint';

@Component({
  selector: 'rr-articular-effusion',
  templateUrl: './articular-effusion.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArticularEffusionComponent {
  @Input() model: JointFindingUiModel;

  articularEffusionType: typeof ArticularEffusionType;

  constructor() {
    this.articularEffusionType = ArticularEffusionType;
  }
}
