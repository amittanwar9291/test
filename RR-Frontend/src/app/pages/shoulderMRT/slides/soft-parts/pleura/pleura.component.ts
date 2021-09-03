import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';

import { PleuraTypeEnum } from '@enums/shoulderMRT/soft-parts';

@Component({
  selector: 'rr-pleura',
  templateUrl: './pleura.component.html',
  styleUrls: ['../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PleuraComponent {
  @Input() model: SoftPartsFindingUiModel;

  pleuraType: typeof PleuraTypeEnum;

  constructor() {
    this.pleuraType = PleuraTypeEnum;
  }
}
