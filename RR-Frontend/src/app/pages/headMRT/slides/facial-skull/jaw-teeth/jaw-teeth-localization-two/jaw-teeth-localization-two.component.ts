import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';

@Component({
  selector: 'rr-jaw-teeth-localization-two',
  templateUrl: './jaw-teeth-localization-two.component.html',
  styleUrls: ['./jaw-teeth-localization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class JawTeethLocalizationTwoComponent {
  @Input() model: FacialSkullFindingUiModel;
}
