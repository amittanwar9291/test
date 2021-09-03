import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent {
  @Input() model: SpleenFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWIInAnySequence: boolean;
}
