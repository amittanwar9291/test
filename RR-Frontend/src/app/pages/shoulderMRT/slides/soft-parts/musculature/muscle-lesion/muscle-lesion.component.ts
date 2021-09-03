import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';

import { ClassificationMunichConsensusTypeEnum } from '@enums/shoulderMRT/soft-parts';

@Component({
  selector: 'rr-muscle-lesion',
  templateUrl: './muscle-lesion.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MuscleLesionComponent {
  @Input() model: MusculatureUiModel;

  classificationMunichConsensusType: typeof ClassificationMunichConsensusTypeEnum;

  constructor() {
    this.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum;
  }
}
