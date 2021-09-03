import { Component, Input } from '@angular/core';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-subdural-hematoma',
  templateUrl: './subdural-hematoma.component.html',
  styleUrls: ['./subdural-hematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubduralHematomaComponent {
  @Input() model: MeningesFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isContrastEnhanced: boolean;
}
