import { Component, Input } from '@angular/core';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-consolidation-characterization-two-tab',
  templateUrl: './consolidation-characterization-two-tab.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ConsolidationCharacterizationTwoTabComponent {
  @Input() model: LungParenchymaFindingUiModel;
}
