import { Component, Input } from '@angular/core';

import { ControlContainer, NgForm } from '@angular/forms';
import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';

import { MuscularAtrophyTypeEnum } from '@enums/shoulderMRT/soft-parts';

@Component({
  selector: 'rr-other-findings',
  templateUrl: './other-findings.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OtherFindingsComponent {
  @Input() model: MusculatureUiModel;

  muscularAtrophyType: typeof MuscularAtrophyTypeEnum;

  constructor() {
    this.muscularAtrophyType = MuscularAtrophyTypeEnum;
  }
}
