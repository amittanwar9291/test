import { Component, Input } from '@angular/core';

import { ControlContainer, NgForm } from '@angular/forms';
import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';

import { AgeType } from '@enums/shoulderMRT/soft-parts';

@Component({
  selector: 'rr-muscular-haematoma',
  templateUrl: './muscular-haematoma.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MuscularHaematomaComponent {
  @Input() model: MusculatureUiModel;

  ageType: typeof AgeType;

  constructor() {
    this.ageType = AgeType;
  }
}
