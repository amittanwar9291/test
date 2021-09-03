import { Component, Input } from '@angular/core';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-mass-characterization-two-tab',
  templateUrl: './mass-characterization-two-tab.component.html',
  styleUrls: ['./mass-characterization-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationTwoTabComponent {
  @Input() model: LungParenchymaFindingUiModel;
}
