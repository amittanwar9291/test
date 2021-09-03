import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';

@Component({
  selector: 'rr-brainstem',
  templateUrl: './brainstem.component.html',
  styleUrls: ['./brainstem.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BrainstemComponent {
  @Input() model: BrainstemCranialNervesFindingUiModel;
}
