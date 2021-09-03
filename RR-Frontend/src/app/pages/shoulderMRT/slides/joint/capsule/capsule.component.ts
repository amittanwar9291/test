import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';

import { JointAndBursaePathologyType, InsertionAnteriorType } from '@enums/shoulderMRT/joint';

@Component({
  selector: 'rr-capsule',
  templateUrl: './capsule.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CapsuleComponent {
  @Input() model: JointFindingUiModel;
  @Input() isCmReinforcedTypeYes: boolean;

  pathologyType: typeof JointAndBursaePathologyType;
  insertionPosteriorType: typeof InsertionAnteriorType;

  constructor() {
    this.pathologyType = JointAndBursaePathologyType;
    this.insertionPosteriorType = InsertionAnteriorType;
  }
}
