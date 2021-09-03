import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';

@Component({
  selector: 'rr-subdural-hematoma-characterization-one',
  templateUrl: './subdural-hematoma-characterization-one.component.html',
  styleUrls: ['./subdural-hematoma-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubduralHematomaCharacterizationOneComponent {
  @Input() model: MeningesFindingUiModel;
}
