import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';

@Component({
  selector: 'rr-salivary-glands-charackterization-two',
  templateUrl: './salivary-glands-charackterization-two.component.html',
  styleUrls: ['./salivary-glands-charackterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryGlandsCharackterizationTwoComponent {
  @Input() model: FacialSkullFindingUiModel;
}
