import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';

@Component({
  selector: 'rr-pleural-thickening',
  templateUrl: './pleural-thickening.component.html',
  styleUrls: ['./pleural-thickening.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PleuralThickeningComponent {
  @Input() findings: SoftPartsFindingUiModel[];
  @Input() model: SoftPartsFindingUiModel;
}
