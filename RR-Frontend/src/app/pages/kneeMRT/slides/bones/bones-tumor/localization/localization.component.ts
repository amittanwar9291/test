import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: KneeBonesFindingUiModel;
}
