import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';

@Component({
  selector: 'rr-muscles',
  templateUrl: './muscles.component.html',
  styleUrls: ['./muscles.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MusclesComponent {
  @Input() model: BladderFindingUiModel;
}
