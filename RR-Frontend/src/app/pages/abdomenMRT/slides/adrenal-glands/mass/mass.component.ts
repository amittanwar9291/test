import { Component, Input } from '@angular/core';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent {
  @Input() model: AdrenalGlandsFindingUiModel;
  @Input() isCmReinforced: boolean;
  @Input() isDWI: boolean;

  constructor() {}
}
