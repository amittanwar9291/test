import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { FindingsVentriclesUiModel } from '@models/cardioMRT/ui/findings-ventricles/findings-ventricles-ui.model';

@Component({
  selector: 'rr-measured-rv-atriums',
  templateUrl: './measured-rv-atriums.component.html',
  styleUrls: ['../findings-ventricles.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MeasuredRvAtriumsComponent {
  @Input() model: FindingsVentriclesUiModel;
}
