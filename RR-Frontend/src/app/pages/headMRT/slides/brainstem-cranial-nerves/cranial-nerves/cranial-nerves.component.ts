import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';

@Component({
  selector: 'rr-cranial-nerves',
  templateUrl: './cranial-nerves.component.html',
  styleUrls: ['./cranial-nerves.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CranialNervesComponent {
  @Input() model: BrainstemCranialNervesFindingUiModel;
}
