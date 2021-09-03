import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';

@Component({
  selector: 'rr-oral-cavity-characterization-two',
  templateUrl: './oral-cavity-characterization-two.component.html',
  styleUrls: ['./oral-cavity-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OralCavityCharacterizationTwoComponent {
  @Input() model: FacialSkullFindingUiModel;
}
