import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AnamnesisFindingUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-finding-ui.model';

@Component({
  selector: 'rr-trauma-indication',
  templateUrl: './trauma-indication.component.html',
  styleUrls: ['./trauma-indication.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class TraumaIndicationComponent {
  @Input() model: AnamnesisFindingUiModel;
  @Input() header: string;
}
