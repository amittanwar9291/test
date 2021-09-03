import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';

@Component({
  selector: 'rr-paranasal-sinuses-characterization-two',
  templateUrl: './paranasal-sinuses-characterization-two.component.html',
  styleUrls: ['./paranasal-sinuses-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParanasalSinusesCharacterizationTwoComponent {
  @Input() model: FacialSkullFindingUiModel;
}
