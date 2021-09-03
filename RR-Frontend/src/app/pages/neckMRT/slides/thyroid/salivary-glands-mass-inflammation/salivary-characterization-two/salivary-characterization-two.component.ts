import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-salivary-characterization-two',
  templateUrl: './salivary-characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryCharacterizationTwoComponent {
  @Input() model: ThyroidFindingUiModel;
}
